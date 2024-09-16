// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UrbanNFT is ERC721A, Ownable {
    uint256 public totalMinted;
    mapping(uint256 => string) private _nftURIs;
    mapping(uint256 => string) private _descriptions;

    constructor() ERC721A("UrbanCollection", "UC") Ownable(msg.sender) {
        totalMinted = 0;
    }

    function mintBatchNFT(string[] memory urls, string[] memory descs) public onlyOwner {
        require(urls.length == descs.length, "Array lengths must match");
        uint256 startingId = totalMinted;
        uint256 quantity = urls.length;

        _safeMint(owner(), quantity);

        for (uint256 i = 0; i < quantity; i++) {
            _nftURIs[startingId + i] = urls[i];
            _descriptions[startingId + i] = descs[i];
        }

        totalMinted += quantity;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId < totalMinted, "Query for nonexistent token");
        return _nftURIs[tokenId];
    }

    function getPrompt(uint256 tokenId) public view returns (string memory) {
        require(tokenId < totalMinted, "Query for nonexistent token");
        return _descriptions[tokenId];
    }
}
