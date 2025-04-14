const orderSchema = require("../Models/orders.model");
const bookSchema = require("../Models/book.model");

const createOrder = async (req, res) => {
  const order = new orderSchema(req.body);
  order.save();
  res.status(201).json({
    message: "Order created successfully"
  });
};

const getOrder = async (req, res) => {
  try {
    const order = await orderSchema.findById(req.body.id).populate('books.book');

    const bookDetails = order.books.map((item) => ({
      book: item.book?.title || "Unknown",
      quantity: item.quantity,
      price: item.price,
    }));

    res.status(200).json({
      orderId: order._id,
      books: bookDetails,
      totalAmount: order.totalAmount,
      status: order.status,
      paymentMethod: order.paymentMethod,
      deliveryAddress: order.deliveryAddress,
      createdAt: order.createdAt,
    });
  } catch (err) {
    console.error("Error in getOrder:", err);
    res.status(500).json({ message: "Failed to fetch order" });
  }
};


module.exports = {createOrder , getOrder};
