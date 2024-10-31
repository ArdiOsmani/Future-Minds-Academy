const router = require('express').Router()
const db = require('../db.js');

router.get('/', (req, res)=>{
    res.status(200).json(db.books);
    res.end();
})

router.get('/:name', (req, res)=>{

    const name = req.params.name;

    const book = db.books.find(p => p.name == name);

    res.status(200).json(book);
    res.end()
})

router.get('/author', (req, res) => {
    const name = req.query.name;

    const books = db.books.filter(p => p.author === name);

    res.status(200).json(books);
    res.end()
});



router.post('/add',(req,res)=>{
    const name = req.query.name;
    const author = req.query.author;
    const year = req.query.year;
    const id = db.books.length + 1;
    
    const book = {
        id: id,
        name: name,
        author: author,
        year: year
    };

    db.books.push(book);


    res.status(200).json({ message: 'Book added successfully'});
    res.end()
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const name = req.query.name;
    const author = req.query.author;
    const year = parseInt(req.query.year);

    const book = db.books.find(b => b.id === id);


    book.name = name;
    book.author = author;
    book.year = year;


    res.status(200).json({ message: 'Book updated successfully'});
    res.end()
});


router.delete('/:id', (req,res)=>{
    const id = parseInt(req.params.id);

    const bookIndex = db.books.findIndex(book => book.id === id);
    db.books.splice(bookIndex, 1);

    res.status(200).json({ message: 'Book deleted successfully'});
    res.end()

})


module.exports = router;