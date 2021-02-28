const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  await deployer.deploy(PikachuToken);
  await deployer.deploy(Timelock, "0xb7cc2059dd1040dbd82be9feb862306b20cf7e54", 86400);
  await deployer.deploy(MasterChefV2, PikachuToken.address, "0xb7cc2059dd1040dbd82be9feb862306b20cf7e54", "0xb7cc2059dd1040dbd82be9feb862306b20cf7e54", 1000000000000000000, 0);
};
