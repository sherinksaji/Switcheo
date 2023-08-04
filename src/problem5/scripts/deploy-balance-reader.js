async function main() {
  const BalanceReader = await ethers.getContractFactory("BalanceReader");
  const reader = await BalanceReader.deploy();

  await reader.deployed();

  console.log("BalanceReader deployed to:", reader.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });
