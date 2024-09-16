const tokenContractJSON = require("../artifacts/contracts/UrbanNFT.sol/UrbanNFT.json");
require('dotenv').config();

const tokenAddress = "0x228a2c4DCBfcb83c74a4eD0E6AfE5a9025B2D03a"; // deployed address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x6CA4e832CEA6a89Af118D5d72032Fea8b231a872";

async function main() {
  const nft = await ethers.getContractAt("UrbanNFT", tokenAddress);
  const tokenURIs = [
    "ipfs://QmWLgQHb6rUPhwdQJGbHbMNfRSrDkGmPVR9Nfa5Mm6ut3p",
    "ipfs://QmZZHc6SJQEaDsvZPLzZcLL3okyMmrmvq8TRyMzxxqJEq7",
    "ipfs://QmXQaExv873jaJw7FJ4Sjg1DuETJ3KvHNLbdp3jpUGeStG",
    "ipfs://QmNtstnqfSm7KpptsZrZgFxEahAAwFFqJSJ6qALeG1NkaL",
    "ipfs://QmQsD1jLcxBrkSFLcttNVqaDn9wrtUS9pQ55d1N9KLDa3Q"
  ];

  const prompts = [
   "Imagine a solar eclipse, with a group of people watching and pointing at the sky",
    "Imagine a surfer riding super gnarly waves in a surfing competition and there are bystanders",
    "Imagine a photorealistic image of a blue alien visiting Earth in a desert for the first time, standing in front of a sign that says welcome to Earth",
    "Generate an image of a London Road, the road is realistic and reflective suggesting it was raining before but now the sky is clear. also, there are people walking on the both sides of the road. The shops and houses are traditional looking. Now one of the main characters of the picture is an English boy of age around 10 years who sitting in the middle of the road with one of his leg stretched and one of the leg folded with a visible small injury on his knee suggesting that the boy fell on the road and hurt himself, now the other main character is an English girl of age around 15-16 years. She is trying to help the boy. both the characters are wearing school dress. She is smiling mildly so to keep a positive attitude and to cheer up the boy. Add some Toona sinensis trees too. Make the reflections and objects realistic, just don't overdo things.",
    "Generate an image of an Italian Road, the road is realistic and reflective suggesting it was raining before but now the sky is clear. also, there are people walking on the both sides of the road. The shops and houses are traditional looking. Now one of the main characters of the picture is an Italian boy of age around 10 years who sitting in the middle of the road with one of his leg stretched and one of the leg folded with a visible small injury on his knee suggesting that the boy fell on the road and hurt himself, now the other main character is an Italian girl of age around 15-16 years. She is trying to help the boy. both the characters are wearing school dress. She is smiling mildly so to keep a positive attitude and to cheer up the boy. Add some Toona sinensis trees too. Make the reflections and objects realistic, just don't overdo things."
  ];

  await nft.mintBatchNFT(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
