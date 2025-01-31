// Implement a script to retrieve the specified holders of $SWTH token on the Binance Smart Chain network.

import { ethers } from "ethers";

const SWTH_CONTRACT_ADDRESS = "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C";
const BSC_PROVIDER_URL = "https://bsc-dataseed.binance.org/";
const holders = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];
const CONTRACT_ABI = [
  "function balanceOf(address account) public view returns (uint256)",
];

const getSWTHBalance = async (
  address: string,
  provider: ethers.Provider
): Promise<string> => {
  const contract = new ethers.Contract(
    SWTH_CONTRACT_ADDRESS,
    CONTRACT_ABI,
    provider
  );
  const balance = await contract.balanceOf(address);
  return balance;
};

(async () => {
  const provider = new ethers.JsonRpcProvider(BSC_PROVIDER_URL);
  for (const holder of holders) {
    const balance = await getSWTHBalance(holder, provider);
    console.log(`${holder} ${balance}`);
  }
})();
