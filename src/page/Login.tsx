import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;