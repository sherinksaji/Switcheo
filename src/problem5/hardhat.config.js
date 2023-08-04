require('dotenv').config();

require("@nomiclabs/hardhat-ethers");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/8fbfb30c963449c2aab31a290ada6e6d", // Replace with your Infura key
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`], // Make sure to include your private key
      gasPrice: 20000000000,
      chainId: 5
    }
    // Add other network configurations if needed
  }
};
