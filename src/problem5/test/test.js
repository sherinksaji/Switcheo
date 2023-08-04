const { ethers } = require("ethers");

const ADDR = "0x191DA37DE96981d0828CCB75217772223c84179a";   // your contract address
const ABI = [{
  "inputs": [
    {
      "internalType": "address",
      "name": "_user",
      "type": "address"
    },
    {
      "internalType": "address[]",
      "name": "_tokens",
      "type": "address[]"
    }
  ],
  "name": "getBalances",
  "outputs": [
    {
      "components": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "internalType": "struct BalanceReader.TokenBalance[]",
      "name": "",
      "type": "tuple[]"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}


];    // your contract ABI

const ADDRESS = "0xD2d094D1D01fae339522b3a4F7ACfB029d7C3Eac"; // some wallet address with token balance
const TOKENS = [    
  "0xccb53d8A41CF4001763F971FBB24e472603E9809", // testEth
  "0xc1dC2d65A2243c22344E725677A3E3BEBD26E604", // Goerli Testnet Mantle Token (MNT)
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);