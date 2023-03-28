const { ethers } = require("hardhat");

async function main() {
  const TokenBalanceUtility = await ethers.getContractFactory(
    "TokenBalanceUtility"
  );
  const tokenBalanceUtility = await TokenBalanceUtility.deploy();
  console.log(
    `TokenBalanceUtility deployed to: ${tokenBalanceUtility.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
