// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductById(id)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    // Redirect to checkout for simplicity in this example
    navigate('/checkout');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-full h-96 object-cover" />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-gray-500">{product.description}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;


