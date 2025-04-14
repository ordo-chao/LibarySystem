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
const contactRouter = require('./routes/contact.route');
const profileRouter = require('./routes/profile.route');
const bookRouter = require('./routes/books.route');
const wishlistRouter = require('./routes/wishlist.route');
const authRouter = require('./routes/auth.route');

// User Routes
app.use('/login', loginRouter);
app.use('/', homepageRouter);
app.use('/search', searchRouter);
app.use('/order', orderRouter);
app.use('/contact', contactRouter);
app.use('/profile', profileRouter);
app.use('/book', bookRouter);
app.use('/wishlist' , wishlistRouter);
app.use('/auth' , authRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
