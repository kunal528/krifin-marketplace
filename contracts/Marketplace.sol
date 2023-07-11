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

    constructor() ERC1155("https://admin.krifin.in/api/nft?id={id}") {}

    function changeMarketplaceAddress(address _marketplaceAddress)
        public
        onlyOwner
    {
        marketplaceAddress = _marketplaceAddress;
    }

    function mint(uint256 _totalSupply) public onlyOwner {
        require(msg.sender != address(0), "to address is invalid");
        _tokenIds.increment();
        _mint(marketplaceAddress, _tokenIds.current(), _totalSupply, "");
    }
}

contract Marketplace is Ownable, ERC1155Holder {
    using SafeMath for uint256;

    struct NFTListing {
        uint256 tokenId;
        uint256 price;
        uint256 quantity;
        bool active;
        uint256 payoutId;
    }

    struct PayoutGroup {
        address[] addresses;
        uint256[] percentages;
    }

    address public nftAddress;
    address public discountContractAddress;
    mapping(uint256 => NFTListing) public nftListings;
    mapping(uint256 => PayoutGroup) payoutGroups;

    event NFTListed(uint256 tokenId, address indexed seller);
    event NFTSale(
        uint256 indexed tokenId,
        address indexed buyer,
        uint256 price,
        uint256 quantity
    );
    event NFTListingCancelled(uint256 tokenId, address indexed seller);
    event PayoutGroupCreated(
        uint256 payoutId,
        address[] addresses,
        uint256[] percentages
    );
    event PayoutGroupUpdated(
        uint256 payoutId,
        address[] addresses,
        uint256[] percentages
    );
    event PayoutGroupRemoved(uint256 payoutId);

    constructor(address _nftAddress, address _discountContractAddress) {
        nftAddress = _nftAddress;
        discountContractAddress = _discountContractAddress;
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

    function listNFT(
        uint256 tokenId,
        uint256 quantity,
        uint256 price,
        uint256 payoutId
    ) external {
        require(nftAddress != address(0), "NFT address has not been set");
        require(quantity > 0, "Quantity must be greater than zero");
        require(price > 0, "Price must be greater than zero");

        NFTListing storage listing = nftListings[tokenId];

        FNFT nftContract = FNFT(nftAddress);
        require(
            nftContract.balanceOf(address(this), tokenId) >= quantity,
            "Insufficient NFT balance"
        );

        listing.tokenId = tokenId;
        listing.price = price;
        listing.quantity = quantity;
        listing.active = false;
        listing.payoutId = payoutId; // Assign the specified payoutId to the listing

        emit NFTListed(tokenId, msg.sender);
    }

    function updateNFT(
        uint256 tokenId,
        uint256 newPrice,
        uint256 newPayoutId
    ) external {
        nftListings[tokenId].price = newPrice;
        nftListings[tokenId].payoutId = newPayoutId;

        emit NFTListed(tokenId, msg.sender);
    }

    function putNFTOnSale(uint256 tokenId) external {
        require(nftAddress != address(0), "NFT address has not been set");

        NFTListing storage listing = nftListings[tokenId];
        require(!listing.active, "NFT is already on sale");

        listing.active = true;

        emit NFTListed(listing.tokenId, msg.sender);
    }

    function removeNFTFromSale(uint256 tokenId) external {
        NFTListing storage listing = nftListings[tokenId];
        require(listing.active, "NFT is not currently on sale");

        listing.active = false;

        emit NFTListingCancelled(tokenId, msg.sender);
    }

    function createPayoutGroup(
        uint256 payoutId,
        address[] memory addresses,
        uint256[] memory percentages
    ) external onlyOwner {
        require(
            addresses.length == percentages.length,
            "Invalid input lengths"
        );

        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Invalid address");
            require(percentages[i] > 0, "Invalid percentage");
        }

        payoutGroups[payoutId] = PayoutGroup(addresses, percentages);

        emit PayoutGroupCreated(payoutId, addresses, percentages);
    }

    function updatePayoutGroup(
        uint256 payoutId,
        address[] memory addresses,
        uint256[] memory percentages
    ) external onlyOwner {
        require(
            addresses.length == percentages.length,
            "Invalid input lengths"
        );
        require(
            payoutGroups[payoutId].addresses.length > 0,
            "Payout group does not exist"
        );

        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Invalid address");
            require(percentages[i] > 0, "Invalid percentage");
        }

        payoutGroups[payoutId] = PayoutGroup(addresses, percentages);

        emit PayoutGroupUpdated(payoutId, addresses, percentages);
    }

    function removePayoutGroup(uint256 payoutId) external onlyOwner {
        require(
            payoutGroups[payoutId].addresses.length > 0,
            "Payout group does not exist"
        );

        delete payoutGroups[payoutId];

        emit PayoutGroupRemoved(payoutId);
    }

    function delistNFT(uint256 tokenId) external {
        delete nftListings[tokenId];

        emit NFTListingCancelled(tokenId, msg.sender);
    }

    function purchaseTokenWithDiscount(
        uint256 tokenId,
        uint256 quantity,
        uint256 _discount,
        uint256 payoutId
    ) external payable {
        FNFT nftContract = FNFT(nftAddress);
        require(nftAddress != address(0), "NFT address has not been set");
        require(quantity > 0, "Quantity is less than 1");

        NFTListing storage listing = nftListings[tokenId];
        require(listing.active, "NFT is not available for sale");
        require(listing.price > 0, "NFT price is not set");

        uint256 totalPrice = listing.price.mul(quantity);
        uint256 discount = DiscountContract(discountContractAddress).balanceOf(
            msg.sender,
            _discount
        );

        require(discount > 0, "You don't own this discount coupon");

        uint256 discountPrice = DiscountContract(discountContractAddress)
            .getDiscount(_discount);
        require(
            msg.value >= totalPrice.sub(discountPrice),
            "Insufficient payment"
        );
        totalPrice = totalPrice.sub(discountPrice);

        // Burn the discount NFT
        DiscountContract(discountContractAddress).burn(msg.sender, tokenId, 1);

        // Transfer funds to the payout group addresses
        PayoutGroup storage payoutGroup = payoutGroups[payoutId];
        require(
            payoutGroup.addresses.length > 0,
            "Payout group does not exist"
        );

        nftContract.safeTransferFrom(
            address(this),
            msg.sender,
            tokenId,
            quantity,
            ""
        );

        uint256 totalPercentage;
        address[] memory addresses = payoutGroup.addresses;
        uint256[] memory percentages = payoutGroup.percentages;

        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Invalid address");
            require(percentages[i] > 0, "Invalid percentage");
            totalPercentage = totalPercentage.add(percentages[i]);

            (bool success, ) = payable(addresses[i]).call{
                value: totalPrice.mul(percentages[i]).div(100)
            }("");
            require(success, "Payment transfer failed");
        }

        require(totalPercentage == 100, "Total percentage is not equal to 100");

        emit NFTSale(tokenId, msg.sender, totalPrice, quantity);
    }

    function getPayoutGroup(uint256 tokenId)
        external
        view
        returns (address[] memory, uint256[] memory)
    {
        NFTListing storage listing = nftListings[tokenId];
        PayoutGroup storage payoutGroup = payoutGroups[listing.payoutId];
        return (payoutGroup.addresses, payoutGroup.percentages);
    }

    function purchaseToken(uint256 tokenId, uint256 quantity) external payable {
        FNFT nftContract = FNFT(nftAddress);
        require(nftAddress != address(0), "NFT address hasnot been set");
        require(quantity > 0, "Quantity is less than 1");

        NFTListing storage listing = nftListings[tokenId];
        require(listing.active, "NFT is not available for sale");
        require(listing.price > 0, "NFT price is not set");

        uint256 totalPrice = listing.price.mul(quantity);
        require(msg.value >= totalPrice, "Insufficient payment");

        // Transfer funds to the payout group addresses
        uint256 payoutId = listing.payoutId;
        PayoutGroup storage payoutGroup = payoutGroups[payoutId];
        require(
            payoutGroup.addresses.length > 0,
            "Payout group does not exist"
        );

        uint256 totalPercentage;
        address[] memory addresses = payoutGroup.addresses;
        uint256[] memory percentages = payoutGroup.percentages;

        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Invalid address");
            require(percentages[i] > 0, "Invalid percentage");
            totalPercentage = totalPercentage.add(percentages[i]);

            (bool success, ) = payable(addresses[i]).call{
                value: totalPrice.mul(percentages[i]).div(100)
            }("");
            require(success, "Payment transfer failed");
        }

        nftContract.safeTransferFrom(
            address(this),
            msg.sender,
            tokenId,
            quantity,
            ""
        );

        require(totalPercentage == 100, "Total percentage is not equal to 100");

        emit NFTSale(tokenId, msg.sender, totalPrice, quantity);
    }
}
