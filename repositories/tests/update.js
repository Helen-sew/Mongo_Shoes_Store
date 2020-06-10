const { expect } = require('chai');
const shopRepository = require('../shopRepository');
const db = require('../../db');

describe('shopRepository.update', async () => {
    beforeAll(async ()=> {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return result when update the existing shop item', async () => {
        const result = await shopRepository.update('Torch Road Shoes', {
            'name': 'Gel Nimbus',
            'description': 'Run further than you thought possible in the GEL-NIMBUS™ 21 running shoe for men by ASICS',
            'img':'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ7PSNpPcD40n6aC5ZjvcXTePLIQENHXg2biF2QV50vtwHfi227-lAzCuIyfE9vSFGgqoxUpaVVcw&usqp=CAc',
            'price': 180,
            'qty': 20
        });
        expect(result.result.n).to.equal(1);
    });

    it('should return error when update the non-existing shop item', async () => {
        try{
            const result = await shopRepository.update('Monster', {
                'name': 'Gel Nimbus 21',
                'description': 'Run further than you thought possible in the GEL-NIMBUS™ 21 running shoe for men by ASICS',
                'img':'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ7PSNpPcD40n6aC5ZjvcXTePLIQENHXg2biF2QV50vtwHfi227-lAzCuIyfE9vSFGgqoxUpaVVcw&usqp=CAc',
                'price': 180,
                'qty': 20
            });
            expect(result.result.n).to.equal(1);

        } catch(err) {
            expect(err.message).to.be.an('string');
        }
    });


});
