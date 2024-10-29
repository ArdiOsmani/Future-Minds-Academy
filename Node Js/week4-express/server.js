const express = require('express')
const db = require('./db.js')
const app = express()

app.use(express.json())


const PAGE_SIZE = 10;

app.get('/products', (req, res)=>{
    let page = parseInt(req.query.page) ||  1;

    const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if(products.length === 0){
        res.status(404)
        res.end()
        return;
    }

    res.json(products)

})



app.get('/products/:id', (req, res)=>{

    let id = parseInt(req.params.id);
    let product = db.products.find(p => p.id === id);

    if(!product){
        res.status(404)
        res.end()
        return;
    }

    product.supplier = db.suppliers.find(s => s.id == product.s)

    res.json(product)
})



app.get('/supplier/:id/products',  (req, res)=>{

    const id = parseInt(req.params.id);
    let productList = db.products.filter(p => p.supplierId === id)

    res.json(productList)
})





app.listen(8585)