
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchProducts = () => axios.get(`${API_BASE_URL}/products`);
export const fetchProductById = (id) => axios.get(`${API_BASE_URL}/products/${id}`);
export const checkout = (cartItems) => axios.post(`${API_BASE_URL}/checkout`, { cartItems });



