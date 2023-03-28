const { ethers } = require("ethers");

const ADDR = "0xa9Db3408976adc9E901b0e077C43fE3698cB7460"; // your contract address
const ABI = [
  "function getBalances(address account) public view returns (uint256)",
]; // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "…",
  "…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);

  return balances;
};

test().then(console.log);
