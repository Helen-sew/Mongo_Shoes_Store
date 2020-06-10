const { expect } = require('chai');    //const chai = require('chai');  //const expect = chai.expect; 
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.getAll', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return an array', async () => {
        const shopItem = await shopRepository.getAll();
        expect(shopItem).to.be.an('array');
    });

    it('should return an array of shop item, and one of the items should be "SWorks 7 Road Shoes',  
        async () => {
            const shopItem = await shopRepository.getAll();
            const SWorks = shopItem.find(item => item.name === 'SWorks 7 Road Shoes');
            expect(SWorks.name).to.equal('SWorks 7 Road Shoes');
        });

    it('should return all multiple items', async () => {
        const shopItem = await shopRepository.getAll();
        expect(shopItem.length).to.be.greaterThan(0);
    });


});