// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract DiscountContract is ERC1155, Ownable, ERC1155Burnable {
    mapping(uint256 => uint256) public discountValue;

    event DiscountTokensClaimed(address indexed user, uint256 tokenId);


    event DiscountSet(uint256 indexed tokenId, uint256 percentage);

    constructor(string memory uri) ERC1155(uri) {}

    function setDiscount(uint256 _tokenId, uint256 _value) external onlyOwner {
        discountValue[_tokenId] = _value;
        emit DiscountSet(_tokenId, _value);
    }

    function getDiscount(uint256 _tokenId) external view returns (uint256) {
        return discountValue[_tokenId];
    }
 
    function distributeDiscountCoupon(address[] memory recipients, uint256 _tokenId) external onlyOwner {
        for (uint256 i = 0; i < recipients.length; i++) {
            address recipient = recipients[i];
            
            // Transfer one token to the recipient
            _mint(recipient,_tokenId,1, "");
            
            // Emit an event for tracking purposes
            emit DiscountTokensClaimed(recipient, _tokenId);
        }
    }
}
