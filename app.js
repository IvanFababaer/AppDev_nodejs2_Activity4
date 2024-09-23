const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware for serving static files (CSS)
app.use(express.static('public'))

// Use routes
app.use('/users', userRoutes);

// Define a simple home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
  });

  app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
  });

  app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
