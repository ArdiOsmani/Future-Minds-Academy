const express = require('express');
const bookController = require('./controllers/bookController');
const app = express();

app.use(express.json());  // Needed to parse JSON body in requests
app.use('/books', bookController);

app.listen(8585, () => {
  console.log('Server running on port 8585');
});
