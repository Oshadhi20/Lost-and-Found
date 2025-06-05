import React from 'react';
import ItemCard from '../component/ItemCard';

const LostItems: React.FC = () => {
    const items = [
        {
            title: 'Black Wallet',
            description: 'Leather wallet with cards inside.',
            location: 'Library',
            date: '2025-06-01',
        },
        {
            title: 'Water Bottle',
            description: 'Blue thermos bottle.',
            location: 'Canteen',
            date: '2025-06-03',
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Reported Lost Items</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {items.map((item, index) => (
                    <ItemCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default LostItems;