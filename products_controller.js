module.exports = {
    create(req,res,next){
        const dbInstance = req.app.get('db');
        const { name, description, price, imageurl } = req.body;

        dbInstance.create_product([name,description,price,imageurl]).then(() => {
            return res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "Shit! Something went wrong"});
            console.log(err)
        })
    },
    getOne(req,res,next){
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_product( params.id ).then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: "Shit! Something went wrong"});
            console.log(err)
        })
    },
    getAll(req,res, next){
        const dbInstance = req.app.get('db');

        dbInstance.read_products().then((products)=> res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Shit! Something went wrong"});
            console.log(err)
        })
    },
    update(req,res,next){
        const dbInstance = req.app.get('db');
        const { params,query } = req;

        dbInstance.update_product([ params.id, query.desc ]).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Shit! Something went wrong"});
            console.log(err)
        })
    },
    deleteProduct(req,res,next){
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_product( params.id ).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Shit! Something went wrong"});
            console.log(err)
        })
    }
};