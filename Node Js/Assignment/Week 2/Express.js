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


app.listen(3000, () => {
    console.log('Server running at port 3000');
});