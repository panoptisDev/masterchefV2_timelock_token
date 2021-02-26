module.exports = {
  /**
   * $ truffle test --network <network-name>
   */
  plugins: [
    'truffle-plugin-verify'
  ]
  api_keys: {
    etherscan: ''
  }

  networks: {
    testnet: {
      host: "127.0.0.1",
      port: 8575,
      network_id: "97",
    },
    mainnet: {
      host: "127.0.0.1",
      port: 8575,
      network_id: "56",
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
          enabled: false,
          runs: 200
        },
      }
    }
  }
};
