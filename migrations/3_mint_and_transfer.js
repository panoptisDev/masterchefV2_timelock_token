const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChef = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let pika = await PikachuToken.deployed();
  let chef = await MasterChef.deployed();

  pika.mint("1000000000000000000000");
  pika.transferOwnership(chef.address);
};
