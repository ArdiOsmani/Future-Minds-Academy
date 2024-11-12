const express = require('express');
const bookController = require('./controllers/bookController');
const app = express();

app.use(express.json());
app.use('/books', bookController);

app.listen(8585, () => {
  console.log('Server running on port 8585');
});
