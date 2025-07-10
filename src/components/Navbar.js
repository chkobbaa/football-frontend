import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login" onClick={() => localStorage.removeItem('token')}>Logout</Link>
    </nav>
  );
}

export default Navbar;
