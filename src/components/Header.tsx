// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-800 to-gray-400 text-gray-300"> {/* Changed to text-gray-300 for darker text */}
            {/* Clickable StrangerCart text */}
            <Link to="/" className="text-3xl font-bold hover:text-gray-400">
                StrangerCart
            </Link>
            <nav className="flex items-center space-x-8">
                <Link to="/about" className="hover:text-gray-400">About</Link>
                <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                <Link to="/products" className="hover:text-gray-400">Products</Link>
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded-md bg-gray-700 text-gray-300 placeholder-gray-400" // Darker text for input
                />
                {/* Cart Icon with Link */}
                <Link to="/cart" className="flex items-center hover:text-gray-400">
                    <FaShoppingCart className="mr-2" />
                    Cart
                </Link>
                {/* Login Icon with Link */}
                <Link to="/login" className="flex items-center hover:text-gray-400" style={{ color: '#eba834' }}>
                    <FaUser className="mr-1" />
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default Header;
