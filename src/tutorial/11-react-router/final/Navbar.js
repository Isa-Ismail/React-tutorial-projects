import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <h1><li>
          <Link to='/'>Home</Link>
        </li></h1>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/people'>People</Link>
        </li>
    </nav>
  );
};

export default Navbar;
