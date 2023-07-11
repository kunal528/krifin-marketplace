// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Discount.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Marketplace.sol";

contract TradingContract is Ownable {
    using SafeMath for uint256;
    struct Order {
        address seller;
        uint256 tokenId;
        uint256 price;
        uint256 quantity;
    }
    mapping(uint256 => mapping(address => Order)) public orders;
    ERC1155 public nftContract;
    DiscountContract public discountContract;
    Marketplace public marketplaceContract;
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

    event OrderPurchased(
        uint256 orderId,
        address indexed buyer,
        uint256 quantity,
        uint256 price
    );

    constructor(
        address _nftContractAddress,
        address _discountAddress,
        address _marketplaceAddress
    ) {
        nftContract = ERC1155(_nftContractAddress);
        discountContract = DiscountContract(_discountAddress);
        marketplaceContract = Marketplace(_marketplaceAddress);
        royaltyPercentage = 1;
    }

    function setRoyalty(uint256 percentage) external onlyOwner {
        require(percentage <= 100, "Invalid royalty percentage");
        royaltyPercentage = percentage;
    }

    function sell(
        uint256 tokenId,
        uint256 price,
        uint256 quantity
    ) external {
        require(tokenId > 0, "Invalid tokenId");
        require(price > 0, "Price must be greater than zero");
        require(quantity > 0, "Quantity must be greater than zero");
        require(
            nftContract.balanceOf(msg.sender, tokenId) >= quantity,
            "Insufficient tokens to sell"
        );

        Order storage order = orders[tokenId][msg.sender];
        require(order.price == 0, "An order for this token already exists");

        order.tokenId = tokenId;
        order.price = price;
        order.quantity = quantity;
        order.seller = msg.sender;

        if (sellers[tokenId].length == 0) {
            sellers[tokenId].push(msg.sender);
        } else {
            bool sellerExists = false;
            for (uint256 i = 0; i < sellers[tokenId].length; i++) {
                if (sellers[tokenId][i] == msg.sender) {
                    sellerExists = true;
                    break;
                }
            }
            if (!sellerExists) {
                sellers[tokenId].push(msg.sender);
            }
        }

        if (tokenId > totalTokens) {
            totalTokens = tokenId;
        }

        emit OrderPlaced(msg.sender, tokenId, price, quantity);
    }

    function cancel(uint256 tokenId) external {
        Order storage order = orders[tokenId][msg.sender];
        require(order.price > 0, "No active order found for this token");

        delete orders[tokenId][msg.sender];
        removeSeller(tokenId, order.seller);

        emit OrderCancelled(tokenId, msg.sender);
    }

    function purchase(
        uint256 tokenId,
        uint256 quantity,
        address seller
    ) external payable {
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

        nftContract.safeTransferFrom(
            order.seller,
            msg.sender,
            order.tokenId,
            quantity,
            ""
        );


        // Distribute royalties to the payout group
        (
            address[] memory addresses,
            uint256[] memory percentages
        ) = marketplaceContract.getPayoutGroup(tokenId);
        for (uint256 i = 0; i < addresses.length; i++) {
            address payoutAddress = addresses[i];
            uint256 payoutPercentage = percentages[i];
            uint256 payoutShare = royaltyAmount.mul(payoutPercentage).div(100);

            // Transfer royalty share to the payout address
            (bool payoutSuccess, ) = payable(payoutAddress).call{
                value: payoutShare
            }("");
            require(payoutSuccess, "Payment transfer to payout group failed");
        }

        // Transfer remaining amount to the seller
        (bool sellerSuccess, ) = payable(seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Payment transfer to seller failed");

        order.quantity -= quantity;
        if (order.quantity <= 0) {
            delete orders[tokenId][seller];
            removeSeller(tokenId, seller);
        }

        emit OrderPurchased(tokenId, msg.sender, quantity, totalPrice);
    }

    function purchase(
        uint256 tokenId,
        uint256 quantity,
        address seller,
        uint256 discountTokenId
    ) external payable {
        require(quantity > 0, "Quantity must be greater than zero");
        Order storage order = orders[tokenId][seller];
        require(order.price > 0, "No active order found for this token");
        require(order.quantity >= quantity, "Insufficient quantity available");

        uint256 totalPrice = order.price.mul(quantity);
        // Check for discount
        uint256 discountPrice = discountContract.getDiscount(discountTokenId);
        require(
            msg.value >= totalPrice.sub(discountPrice),
            "Insufficient payment"
        );

        // Calculate royalty amount
        uint256 royaltyAmount = totalPrice.mul(royaltyPercentage).div(100);

        // Calculate seller amount
        uint256 sellerAmount = totalPrice.sub(royaltyAmount).sub(discountPrice);

        // Burn the discount NFT
        discountContract.burn(msg.sender, discountTokenId, 1);

        nftContract.safeTransferFrom(
            order.seller,
            msg.sender,
            order.tokenId,
            quantity,
            ""
        );


        // Retrieve payout group details from marketplace contract
        (
            address[] memory addresses,
            uint256[] memory percentages
        ) = marketplaceContract.getPayoutGroup(tokenId);
        require(addresses.length == percentages.length, "Invalid payout group");

        // Distribute royalties to the payout group
        for (uint256 i = 0; i < addresses.length; i++) {
            address payoutAddress = addresses[i];
            uint256 payoutPercentage = percentages[i];
            uint256 payoutShare = royaltyAmount.mul(payoutPercentage).div(100);

            // Transfer royalty share to the payout address
            (bool payoutSuccess, ) = payable(payoutAddress).call{
                value: payoutShare
            }("");
            require(payoutSuccess, "Payment transfer to payout group failed");
        }

        // Transfer remaining amount to the seller
        (bool sellerSuccess, ) = payable(seller).call{value: sellerAmount}("");
        require(sellerSuccess, "Payment transfer to seller failed");

        order.quantity -= quantity;
        if (order.quantity <= 0) {
            delete orders[tokenId][seller];
            removeSeller(tokenId, seller);
        }

        emit OrderPurchased(tokenId, msg.sender, quantity, totalPrice);
    }

    function getAllOrders() external view returns (Order[] memory) {
        uint256 orderCount = 0;
        for (uint256 tokenId = 1; tokenId <= totalTokens; tokenId++) {
            orderCount += sellers[tokenId].length;
        }

        Order[] memory allOrders = new Order[](orderCount);
        uint256 index = 0;
        for (uint256 tokenId = 1; tokenId <= totalTokens; tokenId++) {
            address[] storage sellerList = sellers[tokenId];
            for (uint256 i = 0; i < sellerList.length; i++) {
                Order storage order = orders[tokenId][sellerList[i]];
                if (order.price > 0) {
                    allOrders[index] = order;
                    index++;
                }
            }
        }

        return allOrders;
    }

    function removeSeller(uint256 tokenId, address seller) internal {
        address[] storage sellerList = sellers[tokenId];
        require(sellerList.length > 0, "No sellers for this tokenId");

        for (uint256 i = 0; i < sellerList.length; i++) {
            if (sellerList[i] == seller) {
                if (sellerList.length > 1) {
                    sellerList[i] = sellerList[sellerList.length - 1];
                }
                sellerList.pop();
                break;
            }
        }
        sellers[tokenId] = sellerList;
    }
}
