import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public Pages
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import LostItems from '../pages/LostItems';

// Protected Pages
import Dashboard from '../pages/Dashboard';
import AddItem from '../pages/AddItem';

// Route Guards
import ProtectedRoute from './ProtectedRoute';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/lost-items" element={<LostItems />} />

            {/* Protected Routes */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/add-item"
                element={
                    <ProtectedRoute>
                        <AddItem />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;