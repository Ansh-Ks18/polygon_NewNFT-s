const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/StreetNft.sol/StreetNft.json");

const tokenAddress = "0x75F781d52aF72893668a9c8761961432E519Ba9d"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x843E8b1116C2AC092CC1d52ED9f2dc2C7bF23476";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  }
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });