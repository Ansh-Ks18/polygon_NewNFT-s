const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/UrbanNFT.sol/UrbanNFT.json");

const tokenAddress = "0x228a2c4DCBfcb83c74a4eD0E6AfE5a9025B2D03a";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x6CA4e832CEA6a89Af118D5d72032Fea8b231a872";

async function main() {
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootTunnel);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await tokenContract.setApprovalForAll(FxERC721RootTunnel, true);
  await approveTx.wait();
  console.log('Approval confirmed');

  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, tokenIds[i], "0x6556");
    await depositTx.wait();
    console.log(`Token with ID ${tokenIds[i]} deposited`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
