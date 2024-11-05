
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold">My eCommerce</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
