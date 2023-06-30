// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Discount.sol";
import "./Airdrop.sol";

contract FNFT is ERC1155, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address marketplaceAddress;


    constructor() ERC1155("https://magnificent-figolla-1b1175.netlify.app/api/nft?id={id}") {}

    function changeMarketplaceAddress(address _marketplaceAddress)
        public
        onlyOwner
    {
        marketplaceAddress = _marketplaceAddress;
    }

    function mint(uint256 _totalSupply, string memory _uri) public {
        require(msg.sender != address(0), "to address is invalid");
        _tokenIds.increment();
        _mint(msg.sender, _tokenIds.current(), _totalSupply, "");
        // Approve the contract to manage the tokens
        setApprovalForAll(marketplaceAddress, true);
    }
}

contract FNFTMarketplace is Ownable, ERC1155Holder {
    using SafeMath for uint256;

    struct NFTListing {
        uint256 tokenId;
        address seller;
        uint256 price;
        uint256 quantity;
        bool active;
    }

    address public nftAddress;
    address public discountContractAddress;
    address public contractOwner;
    uint256 public contractOwnerPercentage;
    mapping(uint256 => NFTListing) public nftListings;

    event NFTListed(uint256 tokenId, address indexed seller);
    event NFTSale(
        uint256 indexed tokenId,
        address indexed buyer,
        uint256 price,
        uint256 quantity
    );
    event NFTListingCancelled(uint256 tokenId, address indexed seller);

    constructor(
        address _nftAddress,
        address _discountContractAddress,
        address _contractOwner,
        uint256 _contractOwnerPercentage
    ) {
        nftAddress = _nftAddress;
        discountContractAddress = _discountContractAddress;
        contractOwner = _contractOwner;
        contractOwnerPercentage = _contractOwnerPercentage;
    }

    function setNFTAddress(address _nftAddress) external onlyOwner {
        nftAddress = _nftAddress;
    }

    function setDiscountContractAddress(address _discountContractAddress)
        external
        onlyOwner
    {
        discountContractAddress = _discountContractAddress;
    }

    function setContractOwner(
        address _contractOwner
    ) external onlyOwner {
        require(_contractOwner != address(0), "Invalid contract owner address");

        contractOwner = _contractOwner;
    }

    function setContractPercentage(uint256 _contractOwnerPercentage)
        external
        onlyOwner
    {
        require(
            _contractOwnerPercentage <= 100,
            "Invalid contract owner percentage"
        );

        contractOwnerPercentage = _contractOwnerPercentage;
    }

    function listNFT(
        uint256 tokenId,
        uint256 quantity,
        uint256 price
    ) external {
        require(nftAddress != address(0), "NFT address has not been set");
        require(quantity > 0, "Quantity must be greater than zero");
        require(price > 0, "Price must be greater than zero");

        NFTListing storage listing = nftListings[tokenId];
        require(listing.seller == address(0), "NFT is already listed");

        FNFT nftContract = FNFT(nftAddress);
        require(
            nftContract.balanceOf(msg.sender, tokenId) >= quantity,
            "Insufficient NFT balance"
        );

        listing.tokenId = tokenId;
        listing.seller = msg.sender;
        listing.price = price;
        listing.quantity = quantity;
        listing.active = false;

        emit NFTListed(tokenId, msg.sender);
    }

    function putNFTOnSale(uint256 tokenId) external {
        require(nftAddress != address(0), "NFT address has not been set");

        NFTListing storage listing = nftListings[tokenId];
        require(
            listing.seller == msg.sender,
            "You are not the seller of this NFT"
        );
        require(!listing.active, "NFT is already on sale");

        listing.active = true;

        emit NFTListed(listing.tokenId, msg.sender);
    }

    function removeNFTFromSale(uint256 tokenId) external {
        NFTListing storage listing = nftListings[tokenId];
        require(
            listing.seller == msg.sender,
            "You are not the seller of this NFT"
        );
        require(listing.active, "NFT is not currently on sale");

        listing.active = false;

        emit NFTListingCancelled(tokenId, msg.sender);
    }

    function purchaseTokenWithDiscount(uint256 tokenId, uint256 _quantity,uint256 _discount)
        external
        payable
    {
        FNFT nftContract = FNFT(nftAddress);
        require(nftAddress != address(0), "NFT address has not been set");
        require(_quantity > 0, "Quantity is less than 1");

        NFTListing storage listing = nftListings[tokenId];
        require(listing.active, "NFT is not available for sale");
        require(listing.price > 0, "NFT price is not set");

        uint256 totalPrice = listing.price.mul(_quantity);
        uint256 discount = DiscountContract(discountContractAddress).balanceOf(
            msg.sender,
            _discount
        );

        require(discount > 0, "You don't own this discount coupon");

        uint256 discountPrice = DiscountContract(discountContractAddress).getDiscount(_discount);
        require(
            msg.value >= totalPrice.sub(discountPrice),
            "Insufficient payment"
        );
        totalPrice = totalPrice.sub(discountPrice);

        // Burn the discount NFT
        DiscountContract(discountContractAddress).burn(msg.sender, tokenId, 1);

        nftContract.safeTransferFrom(
            listing.seller,
            msg.sender,
            listing.tokenId,
            _quantity,
            ""
        );
        address seller = listing.seller;
        uint256 contractOwnerAmount = totalPrice
            .mul(contractOwnerPercentage)
            .div(100);
        uint256 sellerAmount = totalPrice.sub(contractOwnerAmount);

        (bool sellerSuccess, ) = payable(seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Payment transfer to seller failed");

        (bool contractOwnerSuccess, ) = payable(contractOwner).call{
            value: contractOwnerAmount
        }("");
        require(
            contractOwnerSuccess,
            "Payment transfer to contract owner failed"
        );


        emit NFTSale(tokenId, msg.sender, totalPrice, _quantity);
    }

    function purchaseToken(uint256 tokenId, uint256 quantity) external payable {
        FNFT nftContract = FNFT(nftAddress);
        require(nftAddress != address(0), "NFT address has not been set");
        require(quantity > 0, "Quantity is less than 1");

        NFTListing storage listing = nftListings[tokenId];
        require(listing.active, "NFT is not available for sale");
        require(listing.price > 0, "NFT price is not set");

        uint256 totalPrice = listing.price.mul(quantity);
        require(msg.value >= totalPrice, "Insufficient payment");

        address seller = listing.seller;
        uint256 contractOwnerAmount = totalPrice
            .mul(contractOwnerPercentage)
            .div(100);
        uint256 sellerAmount = totalPrice.sub(contractOwnerAmount);

        (bool sellerSuccess, ) = payable(seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Payment transfer to seller failed");

        (bool contractOwnerSuccess, ) = payable(contractOwner).call{
            value: contractOwnerAmount
        }("");
        require(
            contractOwnerSuccess,
            "Payment transfer to contract owner failed"
        );

        nftContract.safeTransferFrom(
            listing.seller,
            msg.sender,
            tokenId,
            quantity,
            ""
        );


        emit NFTSale(tokenId, msg.sender, totalPrice, quantity);
    }
}
