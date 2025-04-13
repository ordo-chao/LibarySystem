const orderSchema = require("../Models/orders.model");

const orderController = async (req, res) => {
  console.log(req.body);
  // Later, you can do something like:
  // const result = await orderSchema.find({ field: req.body.field });
  res.send("Search logic will go here.");
};

module.exports = orderController;
