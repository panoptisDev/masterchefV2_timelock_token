const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let pika = await PikachuToken.deployed();
  let chef = await MasterChefV2.deployed();

  await pika.mint("100000000000000000000000");
  await pika.transferOwnership(chef.address);
};
