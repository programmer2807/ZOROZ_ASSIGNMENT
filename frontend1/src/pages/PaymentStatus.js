// src/pages/PaymentStatus.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentStatus() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('status');

  return (
    <div>
      <h1 className="text-2xl font-bold">
        {status === 'success' ? 'Payment Successful!' : 'Payment Failed'}
      </h1>
    </div>
  );
}

export default PaymentStatus;
