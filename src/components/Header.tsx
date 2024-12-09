import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-400 text-gray-200">
            <div className="flex justify-between items-center p-6">
                <Link to="/" className="text-3xl font-bold text-gray-300 hover:text-white">
                    <span className="text-gray-500">Stranger</span>Cart
                </Link>
                <nav className="flex items-center space-x-8">
                    <Link to="/about" className="hover:text-gray-400">About</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                    <Link to="/products" className="hover:text-gray-400">Products</Link>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400"
                    />
                    <Link to="/login" className="flex items-center hover:text-gray-400" style={{ color: '#eba834' }}>
                        <FaUser className="mr-1" />
                        Login
                    </Link>
                    <Link to="/cart" className="hover:text-gray-400">
                        <FaCartPlus className="mr-1" />
                        Cart
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
