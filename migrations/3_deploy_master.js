const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let pika = await PikachuToken.deployed()
  await deployer.deploy(MasterChefV2, pika.address, "0x770d34487A8cDBE69906A08A88455EefF1a75c46", "0x770d34487A8cDBE69906A08A88455EefF1a75c46", "10000000000000000000", 0);// 10 pika per block
  let chef = await MasterChefV2.deployed();// 0xe2247f3518220827a246576B74344Fa507cc7772
};
