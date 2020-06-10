const { expect } = require('chai');
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should return insertedCount when insert a new object into db collection', async () => {
        const result = await shopRepository.create({
            'name': 'Gel Nimbus 21',
            'description': 'Run further than you thought possible in the GEL-NIMBUS™ 21 running shoe for men by ASICS',
            'img':'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ7PSNpPcD40n6aC5ZjvcXTePLIQENHXg2biF2QV50vtwHfi227-lAzCuIyfE9vSFGgqoxUpaVVcw&usqp=CAc',
            'price': 180,
            'qty': 20
        });
        expect(result.insertedCount).to.equal(1);
        
    });
});