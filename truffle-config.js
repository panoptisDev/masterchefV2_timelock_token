require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  /**
   * $ truffle test --network <network-name>
   */
  plugins: [
    "truffle-plugin-verify"
  ],
  api_keys: {
    bscscan: process.env.BSC_API_KEY,
  },

  networks: {
    testnet: {
      provider: () =>
      new HDWalletProvider(
        process.env.BSC_TESTNET_PRIVATE_KEY,
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      ),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 500,
      skipDryRun: true,
    },
    mainnet: {
      provider: () => 
      new HDWalletProvider(
        process.env.BSC_MAINNET_PRIVATE_KEY,
        "https://bsc-dataseed1.binance.org"
      ),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};
