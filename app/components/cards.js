"use client";
import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [products, setProducts] = useState([]);
    const addToCart = (product) => {
        console.log(`Added to cart: ${product.title}`);
        // You can extend this function to update a cart state or perform other actions
    };
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Error fetching products:', err));
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        width: '200px',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100%', height: '150px', objectFit: 'contain' }}
                    />
                    <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h3>
                    <p style={{ color: '#555' }}>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;