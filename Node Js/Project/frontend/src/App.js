import './App.css';
import {useCallback, useEffect, useState} from 'react';


function App() {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    getBooks();
  }, [])

  const getBooks = useCallback(async ()=>{
    const response = await fetch("http://localhost:8585/books/");
    const json = await response.json();

    if(json.success){
      setBooks(json.data);
    }

  }, [])

  return (
      <ul>
        {
          books.map(book => <li>{book.title}</li>)
        }
      </ul>
  );
}

export default App;
