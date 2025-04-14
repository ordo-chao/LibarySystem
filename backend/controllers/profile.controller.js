const userSchema = require("../Models/user.model");

const getProfile = async (req, res) => {
  try {
    const user = await userSchema
      .findById(req.body.id)
      .populate("wishlist"); // Populate the wishlist with book data

    if (!user) return res.status(404).json({ message: "User not found" });

    // Map through the wishlist and pick the book name and price
    const wishlistWithDetails = user.wishlist.map((book) => ({
      name: book.title || "Unknown",  // Assuming `book.title` is the name
      price: book.price || "Unknown",  // Assuming `book.price` is the price
    }));

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      wishlist: wishlistWithDetails,  // Include populated wishlist with name and price
      orders: user.orders,
      address: user.address,
      profilePic: user.profilePic,
      createdAt: user.createdAt,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = (req, res) => {
  const user = new userSchema(req.body);
  user.save();
  res.status(201).json({
    message: "User created successfully"
  });
};

module.exports = { getProfile, createUser };
