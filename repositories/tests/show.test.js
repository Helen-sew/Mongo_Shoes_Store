const { expect } = require('chai');     
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.show', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return one object shop item, and the first item should have the name "SWorks 7 Road Shoes"', async () => {
        const item = await shopRepository.show('SWorks 7 Road Shoes');
        expect(item).to.be.an('object');
        expect(item.name).to.equal('SWorks 7 Road Shoes');

    });

    it('should return one shop item for query name "SWorks 7 Road Shoes" ignoring case', async () => {
        const item = await shopRepository.show('SWorks 7 Road Shoes');
        expect(item.name).to.equal('SWorks 7 Road Shoes');
    
    });

    it('should return an error if I am searching for Monster which doesn\'t exit', async () => {
        try{
            await shopRepository.show('Monster');
        } catch(err) {
            expect(err.message).to.equal('Non-existence');
        }
    });
});

