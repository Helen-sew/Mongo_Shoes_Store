const { expect } = require('chai');
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.delete', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should delete a product, name Gel Nimbus 21 from db collection', async () => {
        const result = await shopRepository.delete({ name: 'Louis Vuitton Match-up Sneaker For Men' });
        
        expect(result).to.equal(1);
        
    });
});