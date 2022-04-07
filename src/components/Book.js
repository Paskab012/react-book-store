import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();

  const deleteBook = (event) => {
    dispatch(removeBook(event.target.value));
    dispatch(fetchBooks());
  };
  return (
    <>
      <div className="bookCard">
        <div className="bookInfo">
          <p className="genre">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
          <ul>
            <li><button type="button">Comments</button></li>
            <li><button type="button" value={book.id} onClick={deleteBook}>Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="progress">
          <div>
            <div>chart</div>
            <p>percentage</p>
          </div>
          <div>
            <p>{book.status}</p>
            <p>{book.category}</p>
            <p>{book.title}</p>
            <button type="button">Update progress</button>
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.oneOfType([Proptypes.string, Proptypes.number])).isRequired,
};

export default Book;
