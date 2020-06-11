const shopController = require('./controllers/shopController');

module.exports = app => {
    app.get('/', shopController.redirect);

    app.get('/shoes', shopController.getAll);

    // get the create form api
    app.get('/shoes/new', shopController.makeNew);

    // create post api
    app.post('/shoes', shopController.create);
    
    // show route
    app.get('/shoes/:name', shopController.show);

    // delete route
    app.delete('/shoes/:name', shopController.delete);

    // edit route
    // retrieve the current document in edit page
    app.get('/shoes/:name/edit', shopController.getEditForm);

    // update route
    app.put('/shoes/:name', shopController.update);
};

