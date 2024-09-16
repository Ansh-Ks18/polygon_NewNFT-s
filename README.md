# 🎉 Welcome to the Advanced NFT Bridge from Sepolia to Amoy Using FX Portal! 🎉

Hello and welcome! This project demonstrates the batch minting and cross-chain bridging of NFTs between the Sepolia and Amoy networks using the FX Portal. The focus is on efficient ERC721A batch minting and seamless NFT transfers between blockchain networks.

## Project Overview 📚

This project highlights how to bridge NFTs across different networks, specifically between Sepolia and Amoy, given the deprecation of the Goerli and Mumbai testnets. It leverages the **`UrbanNFT.sol`** contract to batch mint multiple NFTs and bridge them through the **FX Portal**.

### Key Features:

1. **Batch Minting with ERC721A**: Mint multiple NFTs in one transaction using optimized gas efficiency.
2. **NFT Bridging**: Transfer NFTs from Sepolia to Amoy using the FX Portal.
3. **Multi-Network Support**: Demonstrates contract deployment and interaction on Sepolia (Ethereum Testnet) and Amoy (Polygon-based network).

### Smart Contract Example 📝

The `UrbanNFT.sol` contract is designed for batch minting NFTs and bridging them across networks. Here’s a snippet of the batch minting function:

```solidity
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
```

#### How Batch Minting Works 🪙

- **Batch Minting**: Using the `batchMintNFT` function, users can mint multiple NFTs in a single transaction. The function accepts arrays for the NFT URLs and their corresponding prompts.
- **Gas Efficiency**: This function leverages the `ERC721A` standard for optimized gas usage during bulk minting.

### Bridging NFTs Between Sepolia and Amoy 🔄

Once the NFTs are minted on Sepolia, they can be bridged to the Amoy network using the FX Portal. The bridging process includes the following key steps:

1. **Approval**: Approve the FX Root contract for the NFTs using `setApprovalForAll`.
2. **Deposit**: Deposit the NFTs into the FX Portal for bridging.
3. **Wait for Bridging**: Allow 20-30 minutes for the NFTs to appear on the Amoy network.
4. **Check Balance**: Verify the NFTs on Amoy by checking the wallet balance post-bridge.

### Step-by-Step Guide 🚀

#### 1. **Install Dependencies**:

Clone the repository, navigate to the project folder, and install all necessary dependencies:

```bash
npm install
```

#### 2. **Set Up Environment Variables**:

Create a `.env` file and populate it with the following details:

```bash
SEPOLIA_RPC_URL=<your_sepolia_rpc_url>
AMOY_RPC_URL=<your_amoy_rpc_url>
PRIVATE_KEY=<your_private_key>
```

#### 3. **Compile the Smart Contracts**:

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

#### 4. **Deploy the Contract on Sepolia**:

Deploy the `UrbanNFT.sol` contract on the Sepolia network:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

#### 5. **Batch Mint NFTs**:

Batch mint NFTs using the `batchMintNFT` function:

```bash
npx hardhat run scripts/batchMint.js --network sepolia
```

#### 6. **Approve NFT Deposit for Bridging**:

Approve the NFTs for deposit into the FX Portal:

```bash
npx hardhat run scripts/approveDeposit.js --network sepolia
```

#### 7. **Wait for Bridging Completion**:

After 20-30 minutes, once the NFTs are bridged to the Amoy network, obtain the contract address from the Amoy side.

#### 8. **Check NFT Balance on Amoy**:

Check the number of bridged NFTs on the Amoy network using the following command:

```bash
npx hardhat run scripts/getBalance.js --network amoy
```

### Contributing 💻

We welcome contributions to this project! Feel free to submit issues or open pull requests to enhance functionality or fix bugs. Please make sure to follow the project's coding guidelines and standards.

### Troubleshooting & Support ⚠️

- **Faucet Tokens**: Ensure you have sufficient testnet tokens for both Sepolia and Amoy networks to cover gas fees.
  - **Sepolia Faucet**: [Sepolia Faucet](https://sepoliafaucet.com)
  - **Amoy Faucet**: Available through the Polygon Discord server.

- **Compiler Compatibility**: If you run into issues with Solidity versions, double-check the contract’s `pragma` directive and ensure your local compiler matches the required version.

---

### Authors 👤

Created by **Anshu Kumar**  
**Metacrafter ID**: ks.ansh018@gmail.com

This project is part of the broader effort to demonstrate the power of cross-chain NFT bridges and advanced Ethereum development.

---

Feel free to adjust this further according to your project specifics!