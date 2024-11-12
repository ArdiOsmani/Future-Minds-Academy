const express = require('express');
const cors = require("cors");
const bookController = require('./controllers/bookController');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  preflightContinue: true
}))

app.use(express.json());
app.use('/books', bookController);

app.listen(8585, () => {
  console.log('Server running on port 8585');
});
