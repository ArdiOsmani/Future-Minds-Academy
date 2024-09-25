const express = require("express");
const mysql2 = require("mysql2");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const database = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '202152311',
    database: 'library'
})

database.connect((err) => {
    if (err){
       return console.log(err);
    }
    
    console.log('Database Connected!')
})

app.post('/books', (req, res) => {
    const { title, author, genre, rating, year } = req.body;
    const query = 'INSERT INTO books (title, author, genre, rating, year) VALUES (?, ?, ?, ?, ?)';
    database.query(query, [title, author, genre, rating, year], (err, result) => {
        if (err) {
            return res.status(500).json({message: "Error adding books"})
        }
        res.send('Book added successfully.');
    });
});

app.get('/books', (req, res)=>{
    const query = "SELECT * FROM books";
    database.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({message: "Error getting books"})
        }
        res.json(results);
    })
})


app.put('/books/:id', (req, res) => {
    const { title, author, genre, rating, year } = req.body;
    const query = 'UPDATE books SET title = ?, author = ?, genre = ?, rating = ?, year = ? WHERE id = ?';
    database.query(query, [title, author, genre, rating, year, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({message: "Error updating books"})
        }

        res.send('Book updated successfully.');
    });
});


app.delete('/books/:id', (req, res) => {
    const query = 'DELETE FROM books WHERE id = ?';
    database.query(query, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({message: "Error delete books"})
        }
        res.send('Book deleted successfully.');
    });
});


app.listen(5050, ()=>{
    console.log('Server is running on port 5050');
})