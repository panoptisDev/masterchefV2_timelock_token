const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChef = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  await deployer.deploy(PikachuToken);
  await deployer.deploy(MasterChef, PikachuToken.address, "0xb7cc2059dd1040dbd82be9feb862306b20cf7e54", "0xb7cc2059dd1040dbd82be9feb862306b20cf7e54", 10, 0);
  await deployer.deploy(Timelock, "0xb7cc2059dd1040dbd82be9feb862306b20cf7e54", 0);
  //await deployer.deploy(Multicall);
};

//const TestContract = artifacts.require("TestContract");
//module.exports = function(deployer) {
//  deployer.deploy(TestContract, "1000000000000000000");
//};
