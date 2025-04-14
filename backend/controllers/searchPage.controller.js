const bookSchema = require("../Models/book.model");
const filterController = async (req, res) => {
  const query = {};
  if (req.body.genre) query.genre = req.body.genre;
  if (req.body.price) {
    if (req.body.price < 500) {
      query.price = { $lt: 500 };
    } else if (req.body.price < 1000) {
      query.price = { $lt: 1000 };
    } else {
      query.price = { $gt: 1000 };
    }
  }
  if (req.body.rating) {
    if (req.body.rating < 1) {
      query.ratingsAverage = { $lt: 1 };
    } else if (req.body.rating < 2) {
      query.ratingsAverage = { $lt: 2 };
    } else if (req.body.rating < 3) {
      query.ratingsAverage = { $lt: 3 };
    } else if (req.body.rating < 4) {
      query.ratingsAverage = { $lt: 4 };
    } else {
      query.ratingsAverage = { $gt: 4 };
    }
  }
  
  const books = await bookSchema.find(query);
    res.status(200).json(books);
  };

const searchController = async (req, res) => {
  const query = {};
  if (req.body.title) query.title = req.body.title;
  if (req.body.author) query.author = req.body.author;
  if (req.body.isbn) query.isbn = req.body.isbn;
  
  const books = await bookSchema.find(query);

  res.status(200).json(books);  
};

module.exports = {
  filterController,
  searchController
};
