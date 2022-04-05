import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import dispatchToProps from './redux/addProps';
import stateToProps from './redux/addState';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

const books = [
  {
    id: 2,
    genre: 'genre',
    title: 'title',
    author: 'author',
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books books={books} />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default connect(stateToProps, dispatchToProps)(App);
