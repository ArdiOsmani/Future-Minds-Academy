import React from 'react';

const BookRow = ({ book }) => {
  return (
    <div className="book-row">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Published:</strong> {book.publishedAt}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Rating:</strong> {book.rating} / 5</p>
        <p><strong>Pages:</strong> {book.noOfPages}</p>
      </div>
    </div>
  );
};

export default BookRow;