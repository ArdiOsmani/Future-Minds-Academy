const express = require('express');
const router = express.Router();
const booksRepository = require('../repositories/bookRespository');

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = booksRepository.getBookById(id);

  if (!book) {
    return res.status(404).json({ success: false, error: 'No book with that id' });
  }

  res.status(200).json({ success: true, data: book });
});

router.get('/', (req, res) => {
  const books = booksRepository.getAllBooks();
  res.status(200).json({ success: true, data: books });
});

router.post('/', (req, res) => {
  const newBook = booksRepository.createBook(req.body);
  res.status(201).json({ success: true, data: newBook });
});

router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = booksRepository.editBook(bookId, req.body);

  if (updatedBook) {
    return res.status(200).json({ success: true, data: updatedBook });
  }

  res.status(404).json({ success: false, error: 'Book with this id doesn\'t exist' });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  booksRepository.deleteBook(id);
  res.status(200).json({ success: true });
});

module.exports = router;
