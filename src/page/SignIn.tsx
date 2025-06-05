import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }
        // Simple mock login (replace with real logic)
        if (email === 'admin@example.com' && password === '123456') {
            navigate('/');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded">
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
                <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default SignIn;