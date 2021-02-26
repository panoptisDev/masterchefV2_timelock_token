#!/usr/bin/env bash

yarn
truffle migrate --network mainnet
truffle run verify PikachuToken MasterChef Timelock Multicall --network mainnet
