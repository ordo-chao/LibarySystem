const wishlistSchema = require("../Models/wishlist.model");
const bookSchema = require("../Models/book.model");

const getWishlist = async (req, res) => {
  try {
    const wishlist = await wishlistSchema
      .findById(req.body.id)
      .populate("books.book"); // 👈 this should now fill in book objects

    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    const bookDetails = wishlist.books.map((book) => ({
      title: book.title || "Unknown",
      author: book.author || "Unknown",
      price: book.price || "Unknown",
    }));

    res.status(200).json({
      wishlistId: wishlist._id,
      books: bookDetails,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createWishlist = async (req, res) => {
  try {
    const wishlist = new wishlistSchema(req.body);
    await wishlist.save();
    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWishlist,
  createWishlist
};