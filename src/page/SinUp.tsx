import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
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

        // In real app, call API to register user
        console.log('Registering:', { email, password });
        navigate('/login');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
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
                <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default SignUp;