const express = require('express');
const db = require('./db.js')
const app = express()

app.use(express.json())

const PAGE_SIZE = 10;

app.get('/products', (req, res) => {
    let page = Math.max(parseInt(req.query.page) || 1, 1);

    const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (products.length === 0){
        res.status(404);
        res.end();
    }
    else{
        res.json(products);
    }
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = db.products.find(p => p.id == id);

    if(!product){
        res.status(404);
        res.end();
        return;
    }

    product.supplier = db.suppliers.find(s => s.id == product.supplierId);

    res.json(product)
});

app.get('/suppliers/:id/products',(req, res) => {
    const id = req.params.id;
    const products = db.products.filter(p => p.supplierId == id);
    res.json(products);
} )


/* ========= Homework ========== */

app.post('/products', (req, res)=>{
    let product = req.body;
    db.products.push(product);
    res.json(product);
})

app.delete('/products/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const index = db.products.findIndex(p => p.id === id);

    db.products.splice(index, 1);

    res.write(`Product with ID:${id} has been deleted`);
    res.end();
})


app.get('/suppliers', (req, res)=>{
    res.json(db.suppliers);
})


app.post('/suppliers', (req, res)=>{
    const supplier = req.body;
    db.suppliers.push(supplier);
    res.json(supplier);
})


app.listen(8585)