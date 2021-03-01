# Pikachu Finance

https://pikachudefi.com Feel free to read the code. More details coming soon.

## Deployed Contracts

### BSC MAINNET

- PikachuToken - https://bscscan.com/token/
- MasterChef - https://bscscan.com/address/
- Timelock - https://bscscan.com/address/
- MultiCall - https://bscscan.com/address/0x1ee38d535d541c55c9dae27b12edf090c608e6fb

## Deployment

### Test Contracts
```sh
make test
```

### Deploy Contracts
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
  api_keys: {
    bscscan: "<apikey>"
  },
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

- add LP and Token pools to MasterChefV2 - https://github.com/PikachuDefi/pikachu-contracts/wiki

### Transfer MasterChefV2
- transfer ownership of MasterChefV2 to Timelock
```sh
truffle console --network mainnet
```
```js
let chef = await MasterChefV2.deployed();
let time = await Timelock.deployed();
chef.transferOwnership(time.address);
```
