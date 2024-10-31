const express = require('express');
const bookController = require('./controller/bookController.js')

const app = express();

app.use('/book', bookController);

app.listen(8585)