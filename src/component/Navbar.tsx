import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    return (
        <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">
                <Link to="/">Lost & Found</Link>
            </h1>

            <div className="space-x-4">
                {!isAuthenticated ? (
                    <>
                        <Link to="/signin" className="hover:underline">Sign In</Link>
                        <Link to="/signup" className="hover:underline">Sign Up</Link>
                    </>
                ) : (
                    <>
                        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                        <button onClick={handleLogout} className="hover:underline">
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;