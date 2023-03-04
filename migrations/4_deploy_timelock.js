const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  await deployer.deploy(Timelock, "0x770d34487A8cDBE69906A08A88455EefF1a75c46", 21600);// 6 hours
  const timelock = await Timelock.deployed();
  
};
