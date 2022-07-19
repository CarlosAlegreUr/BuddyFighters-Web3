const { assert } = require("chai")
const { ethers } = require("hardhat")
const {collectionName, collecitonSymbol} = require("../../utils/appVariables")

const contractFileOnTest = "BuddyFighterNFT"

describe("BuddyFigthersNFT.sol tests", () => {

    let buddyFightersNFTFactory 
    let buddyFightersNFTContract
    
    beforeEach(async () => {
        const buddyFightersNFTFactory = await ethers.getContractFactory(contractFileOnTest)
        const buddyFightersNFTContract = await buddyFightersNFTFactory.deploy(collectionName, collecitonSymbol)
    })
    

    /* Minting tests */

    it("Mints NFT's with different ID's (both blockchain and in IPFS)", async () => {
        first_ID = await buddyFightersNFTContract.getLastNFTId() 
        await buddyFightersNFTContract.mintNFT("Fake_URI", "Fake_Name", True)
        second_ID = await buddyFightersNFTContract.getLastNFTId()
        assert(first_ID.toString(), second_ID.toString())
    })


    it("Saves NFT's stats in blockchain if desired.", () => {

    })


    it("If minimum amount not payed, NFT not minted.", () => {

    })


    it("If name too long, NFT not minted.", () => {

    })



    /* Improving stats tests */

    it("When improvig stats quantity is added.", () => {

    })


    it("When improvig stats exceeds 255, 255 is set as value.", () => {

    })



    /* Random number generation tests */

    it("Stats are in range [0, 255]", () => {

    })
}) 
