const express = require("express")
const app = express();
app.use(express.json());

const products = [
    { id: 1, name: "Product 1", price: 10.99},
    { id: 2, name: "Product 2", price: 9},
    { id: 3, name: "Product 3", price: 7.99}
]


app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
      id: products.length + 1,
      name,
      price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');

  const { name, price } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;

  res.json(product);
});

app.delete('/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Product not found');

  products.splice(productIndex, 1);
  res.status(204).send(); 
});


app.listen(3000, () => {
    console.log('Server running at port 3000');
});
