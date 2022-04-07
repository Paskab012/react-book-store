import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');

  const saveToStore = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category: categories,

    };
    dispatch(addNewBook(newBook));
    setTitle('');
    setAuthor('');
    setCategories('');
  };
  return (
    <>
      <h1>ADD A NEW BOOK</h1>
      <form onSubmit={saveToStore}>
        <input type="text" placeholder="Enter the book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Enter the author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <select type="text" id="bookClasse" key="genre" defaultValue="Genre" onChange={(e) => setCategories(e.target.value)}>
          <option value="Comic">Comic</option>
          <option value="Action">Snippers</option>
          <option value="Adventure">Jumanji3</option>
          <option value="Classics">Titanic</option>
          <option value="Love">Sex Education</option>
          <option value="Horor">Walking Dead</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
