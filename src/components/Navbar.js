import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/main.css';

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h1>The Kitchen</h1>
      <nav ref={navRef}>
        <a href='/#'>Home</a>
        <a href='/#'>Menu</a>
        <a href='/#'>Locations</a>
        <a href='/#'>About</a>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
