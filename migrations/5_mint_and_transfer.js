const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let pika = await PikachuToken.deployed();// 0x66EE88c75b2796cA3e51e5A7c283004011622aCF
  let chef = await MasterChefV2.deployed();// 0xe2247f3518220827a246576B74344Fa507cc7772

  await pika.mint("100000000000000000000000");//100000 pika
  await pika.transferOwnership(chef.address);// 0xe2247f3518220827a246576B74344Fa507cc7772
};
