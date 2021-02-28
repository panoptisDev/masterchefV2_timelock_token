const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let time = await Timelock.deployed();
  let pika = await PikachuToken.deployed();
  let chef = await MasterChefV2.deployed();

  pika.mint("100000000000000000000000");
  pika.transferOwnership(chef.address);
};
