import React from 'react';
import '../index.css';

function Header({ setPage, currentPage }) {
    return (
      <nav>
        <button
          onClick={() => setPage('About')}
          className={currentPage === 'About' ? 'active' : ''}
        >
          About
        </button>
        <button
          onClick={() => setPage('Portfolio')}
          className={currentPage === 'Portfolio' ? 'active' : ''}
        >
          Portfolio
        </button>
        <button
          onClick={() => setPage('Contact')}
          className={currentPage === 'Contact' ? 'active' : ''}
        >
          Contact
        </button>
        <button
          onClick={() => setPage('Resume')}
          className={currentPage === 'Resume' ? 'active' : ''}
        >
          Resume
        </button>
      </nav>
    );
  }
  
  export default Header;
