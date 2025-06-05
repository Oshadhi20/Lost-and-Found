import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Lost & Found</h1>
            <nav className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/login" className="hover:underline">Login</Link>
            </nav>
        </header>
    );
};

export default Header;