// const hre = require("hardhat");
const { ethers } = require("hardhat");
const pk = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(pk, null);
// const wallet = new ethers.Wallet.createRandom();
console.log(wallet.address);
const test = async () => {
const HSN = await ethers.getContractAt("HSN", "0xfF1E720F8a55686bDA97B913B09DfB55CB75276F");
console.log(HSN.address);
}
test();