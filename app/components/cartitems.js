"use client";
import React from 'react';

const CartItems = ({ items = [], onRemove }) => {
    const handleAddToCart = (item) => {
        const updatedItems = [...items, item];
        onRemove(updatedItems); // Assuming `onRemove` is updated to handle adding items
    };

    return (
        <div className="cart-items space-y-4">
            {items.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
                items.map((item) => (
                    <div
                        key={item.id}
                        className="cart-item flex items-center justify-between p-4 border rounded-lg shadow-sm"
                    >
                        <div className="item-details">
                            <h4 className="text-lg font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-600">Price: ${item.price}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
            <button
                onClick={() => handleAddToCart({ id: 'new', name: 'New Item', price: 10, quantity: 1 })}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Add Item
            </button>
        </div>
    );
};

export default CartItems;