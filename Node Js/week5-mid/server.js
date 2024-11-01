const express = require('express');
const authController = require('./authController.js');
const {printMethod, printUrl} = require('./middleware.js');

const app = express();
app.use(express.json());

app.use('/auth', authController)

app.listen(8585)