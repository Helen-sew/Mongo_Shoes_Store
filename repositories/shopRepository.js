const db = require('../db'); //so that we can use the db here 

module.exports = {
    async getAll () {
        const items = await db.shoeshop.find().toArray();
        return items;
    },
    async show (name) {
        const item = await db.shoeshop.findOne({ name: { '$regex': `^${name}$`, '$options': 'i' } });
        // if (!item) throw new Error('Non-existence');
        return item;
    },
    async getOneByName (name) {
        const foundItem = await db.shoeshop.findOne({ name: { '$regex': `^${name}$`,'$options': 'i' } });
        if (!foundItem) throw new Error(`Item with name '${name}' does not exist`);
        return foundItem;
    },
    async create (item) {
        try{
            return await db.shoeshop.insertOne(item);      
        }catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },

    async update (name, item) {
        try {
            const result = await db.shoeshop.updateOne({
                name: {
                    '$regex': `^${name}$`,
                    '$options': 'i'
                }
            }, {
                $set: item
            });
            if(!result.result.n) {
                throw new Error(`This item with name ${name} doesn't exists`);
            }
            return result;
        } catch (err) {
            throw new Error(`Due to ${err.message}, I cannot update it with ${JSON.stringify(item)}`);
        }
    },
    async delete (item) {
        const result   = await db.shoeshop.deleteOne(item);  
        return result;
    },
    


};

