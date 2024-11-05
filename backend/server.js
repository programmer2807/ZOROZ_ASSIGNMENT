const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./data/product.json');
const PORT = 8000;

app.use(cors());
app.use(express.json());


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
});

app.post('/api/checkout', (req, res) => {
  const { cartItems } = req.body;
  if (cartItems) {
    res.json({ success: true, message: 'Order completed!' });
  } else {
    res.status(400).json({ success: false, message: 'Cart is empty' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
