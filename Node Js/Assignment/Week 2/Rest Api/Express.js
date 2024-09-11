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

app.get("/products/1", (req,res)=>{
    res.status(201);
    res.json(products[1])
})


app.put("/products/", (req, res)=>{
    res.status(201);
    res.json({message:"Product has been updated!"})
})


app.delete("/products/", (req, res)=>{
    res.status(201);
    res.json({message:"Product has been deleted!"})
})


app.listen(3000, () => {
    console.log('Server running at port 3000');
});