import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook }  from '../redux/books/books'

function AddBook() {
    const dispatch = useDispatch();
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const saveToStore = (event) => {
        event.preventDefault();
        const newBook = {
            id : uuidv4(),
            title,
            auth, 
            genre: document.getElementById('bookClasse').value,

        };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
    }
  return (
    <>
      <h1>ADD A NEW BOOK</h1>
      <form onSubmit={saveToStore}>
        <input type="text" placeholder="Enter the book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <input type="text" placeholder="Enter the author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
        <select id="bookClasse" key="genre" defaultValue="Genre">
            <option value="authors">Authors</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
