const tokenContractJSON = require("../artifacts/contracts/StreetNft.sol/StreetNft.json");
require('dotenv').config();

const tokenAddress = "0x0dFf840417EEE74102207d838e0606474Ef4D3e4"; // deployed address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x843E8b1116C2AC092CC1d52ED9f2dc2C7bF23476";

async function main() {
  const nft = await ethers.getContractAt("StreetNft", tokenAddress);
  const tokenURIs = [
    "ipfs://QmaFPaZQdZke6obuB7WfFxhYL5GJ9JfKnKgkGqQPYpiWJs",
    "ipfs://QmR13d94X7ewM7eNwLSUQe1MPvNueWoZ18ruJZhzTemVBp",
    "ipfs://QmXXnzE5Y2U6QNZfHsrDQTyNvehQJu83zYvVLCFc5fQh7Q",
    "ipfs://QmNtstnqfSm7KpptsZrZgFxEahAAwFFqJSJ6qALeG1NkaL",
    "ipfs://QmQsD1jLcxBrkSFLcttNVqaDn9wrtUS9pQ55d1N9KLDa3Q"
  ];

  const prompts = [
    "Generate an image of a Chinatown Road view, the road is realistic and reflective suggesting it was raining before but now the sky is clear. also, there are people walking on the both sides of the road. The shops and houses are traditional looking. Now one of the main characters of the picture is a Chinese boy of age around 10 years who sitting in the middle of the road with one of his leg stretched and one of the leg folded with a visible small injury on his knee suggesting that the boy fell on the road and hurt himself, now the other main character is a Chinese girl of age around 15-16 years. She is trying to help the boy. both the characters are wearing school dress. She is smiling mildly so to keep a positive attitude and to cheer up the boy. Add some Toona sinensis trees too. Make the reflections and objects realistic, just don't overdo things.",
    "Generate an image of an Indian Road view, the road is realistic and reflective suggesting it was raining before but now the sky is clear. also, there are people walking on the both sides of the road. The shops and houses are traditional looking. Now one of the main characters of the picture is an Indian boy of age around 10 years who sitting in the middle of the road with one of his leg stretched and one of the leg folded with a visible small injury on his knee suggesting that the boy fell on the road and hurt himself, now the other main character is an Indian girl of age around 15-16 years. She is trying to help the boy. both the characters are wearing school dress. She is smiling mildly so to keep a positive attitude and to cheer up the boy. Add some Toona sinensis trees too. Make the reflections and objects realistic, just don't overdo things.",
    "Generate an image of a Russian Road view, the road is realistic and reflective suggesting it was raining before but now the sky is clear. also, there are people walking on the both sides of the road. The shops and houses are traditional looking. Now one of the main characters of the picture is a Russian boy of age around 10 years who sitting in the middle of the road with one of his leg stretched and one of the leg folded with a visible small injury on his knee suggesting that the boy fell on the road and hurt himself, now the other main character is a Russian girl of age around 15-16 years. She is trying to help the boy. both the characters are wearing school dress. She is smiling mildly so to keep a positive attitude and to cheer up the boy. Add some Toona sinensis trees too. Make the reflections and objects realistic, just don't overdo things.",
    "Generate an image of a London Road, the road is realistic and reflective suggesting it was raining before but now the sky is clear. also, there are people walking on the both sides of the road. The shops and houses are traditional looking. Now one of the main characters of the picture is an English boy of age around 10 years who sitting in the middle of the road with one of his leg stretched and one of the leg folded with a visible small injury on his knee suggesting that the boy fell on the road and hurt himself, now the other main character is an English girl of age around 15-16 years. She is trying to help the boy. both the characters are wearing school dress. She is smiling mildly so to keep a positive attitude and to cheer up the boy. Add some Toona sinensis trees too. Make the reflections and objects realistic, just don't overdo things.",
    "Generate an image of an Italian Road, the road is realistic and reflective suggesting it was raining before but now the sky is clear. also, there are people walking on the both sides of the road. The shops and houses are traditional looking. Now one of the main characters of the picture is an Italian boy of age around 10 years who sitting in the middle of the road with one of his leg stretched and one of the leg folded with a visible small injury on his knee suggesting that the boy fell on the road and hurt himself, now the other main character is an Italian girl of age around 15-16 years. She is trying to help the boy. both the characters are wearing school dress. She is smiling mildly so to keep a positive attitude and to cheer up the boy. Add some Toona sinensis trees too. Make the reflections and objects realistic, just don't overdo things."
  ];

  await nft.batchMintNFT(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
