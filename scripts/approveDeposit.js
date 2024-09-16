const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/StreetNft.sol/StreetNft.json");

const tokenAddress = "0x0dFf840417EEE74102207d838e0606474Ef4D3e4";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x843E8b1116C2AC092CC1d52ED9f2dc2C7bF23476";

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
