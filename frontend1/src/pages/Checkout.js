// src/pages/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkout } from '../api';

function Checkout() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    checkout([])
      .then(() => navigate('/payment-status?status=success'))
      .catch(() => navigate('/payment-status?status=failure'));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Checkout</h1>
      <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
        Complete Payment
      </button>
    </div>
  );
}

export default Checkout;
