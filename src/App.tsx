// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import ContactUs from './components/ContactUs';

import Home from './components/Home';  // Import the Home component
import AboutUs from './components/About';

const App: React.FC = () => {
    const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; }[]>([]);
    const products = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        // Add more products as needed
    ];

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />  {/* Show Home component on root URL */}
                <Route path="/products" element={<ProductList products={products} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;
