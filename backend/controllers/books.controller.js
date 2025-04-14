const bookSchema = require("../Models/book.model");

const createBook = async (req, res) => {
  try {
    const newBook = new bookSchema(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookSchema.findById(req.body.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTrending = async (req, res) => {
  try {
    const books = await bookSchema.find({isTrending : true});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getonSale = async (req, res) => {
  try {
    const books = await bookSchema.find({isNewArrival : true});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecommended = async (req, res) => {
  try {
    const books = await bookSchema.find({isRecommended : true});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
};

const getGenre =  async (req , res) =>
  {
    try {
      const books = await bookSchema.find({genre : req.body.genre});
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }



module.exports = { createBook , getBook , getTrending , getonSale , getRecommended , getGenre };