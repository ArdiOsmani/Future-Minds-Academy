import './App.css';
import { useCallback, useEffect, useState } from 'react';
import './index.css'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = useCallback(async () => {
    const response = await fetch("http://localhost:8585/books/");
    const json = await response.json();

    if (json.success) {
      setBooks(json.data);
    }
  }, []);

  return (
    <ul>
      {
        books.map(book => (
          <BookRow key={book.id} book={book} />
        ))
      }
    </ul>
  );
}

const BookRow = ({ book }) => {
  return (
    <div className="book-row">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Rating:</strong> {book.rating} / 5</p>
      </div>
    </div>
  );
};

export default App;
