const express = require('express');
const bookController = require('./controllers/bookController')
const app = express();

app.use('/books', bookController)

app.listen(8585);