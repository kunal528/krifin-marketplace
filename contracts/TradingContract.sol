// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Discount.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract TradingContract is Ownable {
    using SafeMath for uint256;
    struct Order {
        address seller;
        uint256 tokenId;
        uint256 price;
        uint256 quantity;
        address owner;
    }

    mapping(uint256 => mapping(address => Order)) public orders;
    ERC1155 public nftContract;
    DiscountContract public discountContract;
    address public contractOwner;
    uint256 public contractOwnerPercentage;
    uint256 public royaltyPercentage;
    uint256 public totalTokens;
    mapping(uint256 => address[]) public sellers; 


    event OrderPlaced(
        address indexed seller,
        uint256 tokenId,
        uint256 price,
        uint256 quantity
    );

    event OrderCancelled(uint256 orderId, address indexed seller);

    event OrderPurchased(uint256 orderId, address indexed buyer, uint256 quantity, uint256 price);

    constructor(address _nftContractAddress, address _discountAddress) {
        contractOwner = msg.sender;
        contractOwnerPercentage = 10;
        nftContract = ERC1155(_nftContractAddress);
        discountContract = DiscountContract(_discountAddress);
        royaltyPercentage = 1;
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

    function setRoyalty(uint256 percentage) external onlyOwner {
        require(
            percentage <= 100,
            "Invalid royalty percentage"
        );
        royaltyPercentage = percentage;
    }

    function sell(address owner,uint256 tokenId, uint256 price, uint256 quantity) external {
        require(tokenId > 0, "Invalid tokenId");
        require(price > 0, "Price must be greater than zero");
        require(quantity > 0, "Quantity must be greater than zero");
        require(nftContract.balanceOf(msg.sender, tokenId) >= quantity, "Insufficient tokens to sell");


        Order storage order = orders[tokenId][msg.sender];
        require(order.price == 0, "An order for this token already exists");

        order.tokenId = tokenId;
        order.price = price;
        order.quantity = quantity;
        order.seller = msg.sender;
        order.owner = owner;

        sellers[tokenId].push(msg.sender);

        if (tokenId > totalTokens) {
            totalTokens = tokenId;
        }


        emit OrderPlaced(msg.sender, tokenId, price, quantity);
    }

    function cancel(uint256 tokenId) external {
        Order storage order = orders[tokenId][msg.sender];
        require(order.price > 0, "No active order found for this token");

        delete orders[tokenId][msg.sender];

        emit OrderCancelled(tokenId, msg.sender);
    }

    function purchase(uint256 tokenId, uint256 quantity, address seller) external payable {
        require(quantity > 0, "Quantity must be greater than zero");
        Order storage order = orders[tokenId][seller];
        require(order.price > 0, "No active order found for this token");
        require(order.quantity >= quantity, "Insufficient quantity available");

        uint256 totalPrice = order.price.mul(quantity);
        // Check for discount
        require(msg.value >= totalPrice, "Insufficient payment");
        // Calculate royalty amount
        uint256 royaltyAmount = totalPrice.mul(royaltyPercentage).div(100);

        // Calculate seller amount
        uint256 sellerAmount = totalPrice.sub(royaltyAmount);

        // Transfer NFT from seller to buyer
        nftContract.safeTransferFrom(order.seller, msg.sender, order.tokenId, quantity, "");

        // Transfer payment to seller
        (bool sellerSuccess, ) = payable(order.seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Payment transfer to seller failed");

        uint256 contractOwnerAmount = royaltyAmount
            .mul(contractOwnerPercentage)
            .div(100);
        uint256 ownerAmount = royaltyAmount.sub(contractOwnerAmount);
        // Transfer royalty to contract owner
        (bool royaltySuccess, ) = payable(contractOwner).call{value: contractOwnerAmount}("");
        require(royaltySuccess, "Payment transfer to royalty owner failed");

        (bool ownerSuccess, ) = payable(order.owner).call{value: ownerAmount}("");
        require(ownerSuccess, "Payment transfer to seller failed");

        order.quantity -= quantity;
        if (order.quantity <= 0) {
        delete orders[tokenId][msg.sender];
    }


        emit OrderPurchased(tokenId, msg.sender, quantity, totalPrice);
    }

    function purchase(uint256 tokenId, uint256 quantity,address seller, uint256 _discount) external payable {
        require(quantity > 0, "Quantity must be greater than zero");
        Order storage order = orders[tokenId][seller];
        require(order.price > 0, "No active order found for this token");
        require(order.quantity >= quantity, "Insufficient quantity available");

        uint256 totalPrice = order.price.mul(quantity);
        // Check for discount
        require(msg.value >= totalPrice, "Insufficient payment");
        // Calculate royalty amount
        uint256 royaltyAmount = totalPrice.mul(royaltyPercentage).div(100);

        // Calculate seller amount
        uint256 sellerAmount = totalPrice.sub(royaltyAmount);

        uint256 discount = discountContract.balanceOf(
            msg.sender,
            _discount
        );

        require(discount > 0, "You don't own this discount coupon");

        uint256 discountPrice = discountContract.getDiscount(_discount);
        require(
            msg.value >= totalPrice.sub(discountPrice),
            "Insufficient payment"
        );
        totalPrice = totalPrice.sub(discountPrice);
        order.quantity -= quantity;

        if (order.quantity <= 0) {
        delete orders[tokenId][seller];
        }
        // Burn the discount NFT
        discountContract.burn(msg.sender, tokenId, 1);

        // Transfer NFT from seller to buyer
        nftContract.safeTransferFrom(order.seller, msg.sender, order.tokenId, quantity, "");

        emit OrderPurchased(tokenId, msg.sender, quantity, totalPrice);
        // Transfer payment to seller
        (bool sellerSuccess, ) = payable(order.seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Payment transfer to seller failed");

        uint256 contractOwnerAmount = royaltyAmount
            .mul(contractOwnerPercentage)
            .div(100);
        uint256 ownerAmount = royaltyAmount.sub(contractOwnerAmount);
        // Transfer royalty to contract owner
        (bool royaltySuccess, ) = payable(contractOwner).call{value: contractOwnerAmount}("");
        require(royaltySuccess, "Payment transfer to royalty owner failed");

        (bool ownerSuccess, ) = payable(order.owner).call{value: ownerAmount}("");
        require(ownerSuccess, "Payment transfer to seller failed");

        

    }


    function getAllOrders() external view returns (Order[] memory) {
        uint256 orderCount = 0;
        for (uint256 tokenId = 1; tokenId <= totalTokens; tokenId++) {
            for (uint256 i = 0; i < sellers[tokenId].length; i++) {
                if (orders[tokenId][sellers[tokenId][i]].price > 0) {
                    orderCount++;
                }
            }
        }

        Order[] memory allOrders = new Order[](orderCount);
        uint256 index = 0;
        for (uint256 tokenId = 1; tokenId <= totalTokens; tokenId++) {
            for (uint256 i = 0; i < sellers[tokenId].length; i++) {
                if (orders[tokenId][sellers[tokenId][i]].price > 0) {
                    allOrders[index] = orders[tokenId][sellers[tokenId][i]];
                    index++;
                }
            }
        }

        return allOrders;
    }}