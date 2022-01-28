const hre = require('hardhat')

const main = async () => {
  const Greeter = await hre.ethers.getContractFactory('Greeter')
  const greeter = await Greeter.deploy('Hello, Hardhat!')

  await greeter.deployed()

  console.log('Greeter deployed to:', greeter.address)
}

const main = async () => {
  try {
    await main();
    process.exit(0); // process went successfully
  } catch (err) {}
}
