import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, ShoppingCart, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Cake className="h-8 w-8 text-rose-500" />
            <span className="text-xl font-bold text-rose-500">Suzzy Snack Bar</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/menu" className="text-gray-600 hover:text-rose-500">
              Menu
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-rose-500">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-rose-500">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;