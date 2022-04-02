import React from 'react'

function AddBook() {
  return (
    <>
    <h1>ADD A NEW BOOK</h1>
    <form>
        <input type="text" placeholder='Enter the book title' />
        <select key="author">
            <option value="Category">Authors</option>
        </select>
        <button type="submit">New Book</button>
    </form>
    </>
  )
}

export default AddBook