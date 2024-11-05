// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-gray-500">{product.description}</p>
      <Link to={`/products/${product.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;

