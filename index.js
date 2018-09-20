require('dotenv').config()

const express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    massive = require('massive');
const products_controller = require('./products_controller');
    

    const app = express();
    app.use(bodyParser.json());
    massive(process.env.CONNECTION_STRING).then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(err => console.log(err));

    app.get('/api/products', products_controller.getAll);
    app.get('/api/product/:id', products_controller.getOne);
    app.post('/api/product', products_controller.create);
    app.put('/api/product/:id', products_controller.update);
    app.delete('/api/product/:id', products_controller.deleteProduct);

app.listen(port, () => console.log(`Server listening on port ${port}.`))

