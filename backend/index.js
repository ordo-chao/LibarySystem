const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');

const app = express();
// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json())

// Routers
const  loginRouter = require('./routes/login.route');
const homepageRouter = require('./routes/homePage.route');
const searchRouter = require('./routes/search.route');
const orderRouter = require('./routes/order.route');

// User Routes
app.use('/login', loginRouter);
app.use('/', homepageRouter);
app.use('/search', searchRouter);
app.use('/order', orderRouter);


// Admin Routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
