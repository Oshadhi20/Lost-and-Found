import React from 'react';

interface ItemCardProps {
    title: string;
    description: string;
    location: string;
    date: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ title, description, location, date }) => {
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-sm mt-1 text-gray-500">Found at: {location}</p>
            <p className="text-sm text-gray-400">Date: {date}</p>
        </div>
    );
};

export default ItemCard;