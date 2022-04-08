import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './Addbook';
import { fetchBooks } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
}

export default Books;
