# Pikachu Finance

https://pikachudefi.com Feel free to read the code. More details coming soon.

## Deployed Contracts

### BSC MAINNET

- PikachuToken - https://bscscan.com/token/
- MasterChef - https://bscscan.com/address/
- Timelock - https://bscscan.com/address/
- MultiCall - https://bscscan.com/address/

## Deployment

### Deploy Tokens
```sh
make deploy
```
- deploy PikachuToken
- deploy Timelock
- deploy MasterChefV2
- mint PikachuToken
- transfer ownership of PikachuToken to MasterChefV2

### Verify Contracts

- add your BscScan API Key to truffle-config.js
```js
  plugins: [
    "truffle-plugin-verify"
  ],
  api_keys: {
    etherscan: "<apikey>"
  },

  networks: {
    testnet: {
```
- then run
```sh
make verify
```

### Add Pools to MasterChefV2
```sh
truffle console --network mainnet
```
```js
let chef = await MasterChefV2.deployed();
chef.add(uint256 _allocPoint, IBEP20 _lpToken, uint16 _depositFeeBP, bool _withUpdate);
```
depositFeeBP: 100 = 1%, 10000 = 100%

- add LP pools to MasterChefV2
  - 0: PIKACHU-BUSD LP
  - 1: PIKACHU-BNB LP
  - 2: BNB-BUSD LP https://exchange.pikachudefi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
  - 3: USDT-BUSD LP https://exchange.pikachudefi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x55d398326f99059ff775485246999027b3197955
  - 4: BTCB-BNB LP https://exchange.pikachudefi.com/#/add/ETH/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c
  - 5: ETH-BNB LP https://exchange.pikachudefi.com/#/add/ETH/0x2170ed0880ac9a755fd29b2688956bd959f933f8
  - 6: DAI-BUSD LP https://exchange.pikachudefi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3
  - 7: USDC-BUSD LP https://exchange.pikachudefi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
  - 8: DOT-BUSD LP https://exchange.pikachudefi.com/#/add/ETH/0x7083609fce4d1d8dc0c979aab8c869ea2c873402
  - 9: CAKE-BUSD LP https://exchange.pikachudefi.com/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
  - 10: CAKE-BNB LP https://exchange.pikachudefi.com/#/add/ETH/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
- add Token pools to MasterChefV2
  - 11: PIKACHU
  - 12: BUSD https://exchange.pikachudefi.com/#/swap/0xe9e7cea3dedca5984780bafc599bd69add087d56
  - 13: WBNB https://exchange.pikachudefi.com/#/swap/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
  - 14: USDT https://exchange.pikachudefi.com/#/swap/0x55d398326f99059ff775485246999027b3197955
  - 15: BTCB https://exchange.pikachudefi.com/#/swap/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c
  - 16: ETH https://exchange.pikachudefi.com/#/swap/0x2170ed0880ac9a755fd29b2688956bd959f933f8
  - 17: DAI https://exchange.pikachudefi.com/#/swap/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3
  - 18: USDC https://exchange.pikachudefi.com/#/swap/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
  - 19: DOT https://exchange.pikachudefi.com/#/swap/0x7083609fce4d1d8dc0c979aab8c869ea2c873402
  - 20: CAKE https://exchange.pikachudefi.com/#/swap/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
  - 21: BSCX https://exchange.pikachudefi.com/#/swap/0x5ac52ee5b2a633895292ff6d8a89bb9190451587
  - 22: AUTO https://exchange.pikachudefi.com/#/swap/0xa184088a740c695e156f91f5cc086a06bb78b827
  - 23: LINK https://exchange.pikachudefi.com/#/swap/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd
