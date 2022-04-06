import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './Addbook';

function Books() {
  const books = useSelector((state) => state.booksReducer);

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
