# Pikachu Finance

https://pikachudefi.com Feel free to read the code. More details coming soon.

## Deployed Contracts

### BSC MAINNET

- PikachuToken - https://bscscan.com/token/0xd592Dfe9E1B687B1D9dbDacf5b9F0789CC9Cd584
- MasterChefV2 - https://bscscan.com/address/0x8881C9E351482dDf0F3186A33fb40E28c0a52A26
- Timelock - https://bscscan.com/address/0xC60C837b5618E6259D8cb93096C860472bc5921A
- MultiCall - https://bscscan.com/address/0x1ee38d535d541c55c9dae27b12edf090c608e6fb

## Deployment

### ENV Variables
Create a `.env` file with the following content:
```
BSC_MAINNET_PRIVATE_KEY = <private_key>
BSC_TESTNET_PRIVATE_KEY = <private_key>
BSC_API_KEY = <bscscan_api_key>
```

### Deploy Contracts
- Mainnet
```sh
make deploy
```
- Testnet
```sh
make test-deploy
```
- Mainnet reset
```sh
make deploy-force
```
- Testnet reset
```sh
make test-deploy-force
```

- deploy PikachuToken
- deploy MasterChefV2
- deploy Timelock
- mint PikachuToken
- transfer ownership of PikachuToken to MasterChefV2

### Verify Contracts
- Mainnet
```sh
make verify
```
- Testnet
```sh
make test-verify
```

### Add Pools to MasterChefV2
- Mainnet
```sh
make console
```
- Testnet
```sh
make test-console
```

```js
let chef = await MasterChefV2.deployed();
chef.add(uint256 _allocPoint, IBEP20 _lpToken, uint16 _depositFeeBP, bool _withUpdate);
```

depositFeeBP: 100 = 1%, 10000 = 100%

- add LP and Token pools to MasterChefV2 - https://github.com/PikachuDefi/pikachu-contracts/wiki/Pools

### Transfer MasterChefV2
- transfer ownership of MasterChefV2 to Timelock
- Mainnet
```sh
make console
```
- Testnet
```sh
make test-console
```

```js
let chef = await MasterChefV2.deployed();
let time = await Timelock.deployed();
chef.transferOwnership(time.address);
```
