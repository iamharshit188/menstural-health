import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MensturalHealth</Link>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-purple-200">Home</Link>
          <Link to="/buy" className="hover:text-purple-200">Buy Products</Link>
          <Link to="/about" className="hover:text-purple-200">About</Link>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-purple-700 p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-purple-200">Home</Link>
              <Link to="/buy" className="hover:text-purple-200">Buy Products</Link>
              <Link to="/about" className="hover:text-purple-200">About</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;