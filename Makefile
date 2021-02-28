all: 

clean:
	rm -rf build node_modules

deps:
	yarn

build: deps
	truffle compile

deploy: deps
	truffle migrate --network mainnet

test: deps
	truffle migrate --network testnet

deploy-force: deps
	truffle migrate --network mainnet --reset

test-force: deps
	truffle migrate --network testnet --reset

verify: deps
	truffle run verify PikachuToken MasterChef Timelock --network mainnet
