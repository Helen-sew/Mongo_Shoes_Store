const { expect } = require('chai');

const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.getOneByName', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return an object', async () => {
        const SWorks = await shopRepository.getOneByName('SWorks 7 Road Shoes');
        expect(SWorks).to.be.an('object');
    });

    it('should return the object, ignoring case sensitivity', async () => {
        const SWorks = await shopRepository.getOneByName('SWorks 7 Road Shoes');
        expect(SWorks.name).to.equal('SWorks 7 Road Shoes');
    });

    it('should throw an error if the item cannot be found', async () => {
        try {
            await shopRepository.getOneByName('banana');
            throw new Error('test should have thrown an error');
        } catch (err) {
            expect(err.message).to.equal('Item with name \'banana\' does not exist');
        }
    });
});