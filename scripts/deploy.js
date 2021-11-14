// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();


  const vaultFactory = await hre.ethers.getContractFactory('vaultfactory');
  const VaultFactory = await vaultFactory.deploy('vault deployed') 
  await VaultFactory.deployed();


  const vault = await hre.ethers.getContractFactory('vault');
  const Vault = await vault.deploy('vault deployed') 
  await Vault.deployed();


  console.log("Greeter deployed to:", greeter.address);
  console.log("VaultFactory deployed to:", VaultFactory.address);
  console.log("Vault deployed to:", Vault.address);  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
