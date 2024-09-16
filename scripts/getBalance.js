const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/UrbanNFT.sol/UrbanNFT.json");

const tokenAddress = "0xd06587F23A513e6bb791a5849f97dc6eC7224438"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x6CA4e832CEA6a89Af118D5d72032Fea8b231a872";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  }
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
