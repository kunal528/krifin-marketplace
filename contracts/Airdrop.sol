// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Airdrop is ERC1155, Ownable {
    using Counters for Counters.Counter;
    
    event AirdropDistributed(address indexed recipient, uint256 tokenId);
    
    constructor() ERC1155("https://magnificent-figolla-1b1175.netlify.app/api/airdrop?id={id}") {
        // Pass an empty string as the URI placeholder for now
    }
    
    function distributeAirdrop(address[] memory recipients, uint256 _tokenId) external onlyOwner {
        for (uint256 i = 0; i < recipients.length; i++) {
            address recipient = recipients[i];
            
            // Transfer one token to the recipient
            _mint(recipient,_tokenId,1, "");
            
            // Emit an event for tracking purposes
            emit AirdropDistributed(recipient, _tokenId);
        }
    }
}
