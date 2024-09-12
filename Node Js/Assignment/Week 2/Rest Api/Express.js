const express = require("express")
const app = express();

const products = [
    { id: 1, name: "Product 1", price: 10.99},
    { id: 2, name: "Product 2", price: 9},
    { id: 3, name: "Product 3", price: 7.99}
]


app.get('/products', (req,res)=>{
    res.status(201)
    res.json(products);
})

app.post('/products', (req,res)=>{
    res.status(201)
    res.json({name:"Product 4", price:21.99})
})

app.get("/products/:id", (req,res)=>{
    let productId = parseInt(req.params.id)-1;
    res.status(201);
    console.log(productId);
    res.json(products[productId])
})


app.put("/products/:id", (req, res)=>{
    res.status(201);
    res.json({message:`Product with id ${req.params.id} been updated!`})
})


app.delete("/products/:id", (req, res)=>{
    res.status(201);
    res.json({message:`Product with id ${req.params.id} has been deleted!`})
})


app.listen(3000, () => {
    console.log('Server running at port 3000');
});