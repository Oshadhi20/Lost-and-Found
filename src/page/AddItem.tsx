import React, { useState } from 'react';

const AddItem: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, description, location, date: new Date().toISOString() });
        alert('Item reported successfully!');
        setTitle('');
        setDescription('');
        setLocation('');
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Report a Lost Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <input
                    type="text"
                    placeholder="Item Title"
                    className="w-full p-2 border rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    className="w-full p-2 border rounded"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Location Found"
                    className="w-full p-2 border rounded"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddItem;