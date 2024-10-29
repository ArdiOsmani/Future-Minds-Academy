const express = require('express');
const productController = require('./controllers/productController')
const calculatorController = require('./controllers/calculatorController')

const app = express()

app.use('/product', productController)
app.use('/calc', calculatorController)

app.listen(8585)