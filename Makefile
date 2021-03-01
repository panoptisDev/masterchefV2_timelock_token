all:

clean:
	rm -rf build node_modules

deps:
	yarn

build: deps
	truffle compile

deploy: deps
	truffle migrate --network mainnet

test-deploy: deps
	truffle migrate --network testnet

deploy-force: deps
	truffle migrate --network mainnet --reset

test-deploy-force: deps
	truffle migrate --network testnet --reset

verify: deps
	truffle run verify PikachuToken MasterChefV2 Timelock --network mainnet

test-verify: deps
	truffle run verify PikachuToken MasterChefV2 Timelock --network testnet

console: deps
	truffle console --network mainnet

test-console: deps
	truffle console --network testnet
