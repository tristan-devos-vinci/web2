// File: src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cinema">Cinema</Link></li>
        <li><Link to="/movies">Movies</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;