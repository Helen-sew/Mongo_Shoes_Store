const shopRepository = require('../repositories/shopRepository');

module.exports = {
    async getAll (req, res) {
        const items = await shopRepository.getAll();
        return res.render('shop/index', { items });
    
    },
    async makeNew (req, res) {
        await res.render('shop/new');
    },
    async show (req, res) {
        try {
            const item = await shopRepository.show(req.params.name);
            return res.render('shop/show', { item });
        } catch (err) {
            return res.send(err.message);
        }
    },
    async getOneByName (req, res) {
        try {
            const item = await shopRepository.getOneByName(req.params.name);
            return res.render('shop/show', { item });
        } catch (err) {
            return res.send(err.message);
        }
    },
    async create (req, res) {
        try {
            const item = {
                'name': req.body.name,
                'description': req.body.description,
                'img': req.body.img,
                'price': parseInt(req.body.price),
                'qty': parseInt(req.body.qty)
            };
            await shopRepository.create(item);
            return res.redirect('/shoes');
        } catch (err) {
            return res.send(err.message);
        }
    },
    async update (req, res) {
        try {
            const item = {
                'name': req.body.name,
                'description': req.body.description,
                'img': req.body.img,
                'price': parseInt(req.body.price),
                'qty': parseInt(req.body.qty)
            };
            await shopRepository.update(req.params.name, item);
            return res.redirect('/shoes');
        } catch (err) {
            return res.render('errors/404', { err });
        }
    },
    async getEditForm (req, res) {
        try{
            const item = await shopRepository.getOneByName(req.params.name);
            // console.log(req.params.name);
            // console.log(item);
            return res.render('shop/edit', { item });

        } catch (err)  {
            return res.render('errors/404', { err });
        }
    },
    async delete (req, res) {
        try {
            console.log(req.params);
            await shopRepository.delete(req.params);
            
            
            return res.redirect('/shoes');
        } catch(err) {
            return res.send(err.message);
        }
    }

    

};


