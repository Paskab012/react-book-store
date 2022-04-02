import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <div className="mainNav">
      <h1>BOOKSTORE</h1>
      <ul className="navMenu">
        <li><Link to="/">Books</Link></li>
        <span>|</span>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar