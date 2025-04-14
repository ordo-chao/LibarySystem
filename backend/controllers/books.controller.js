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

module.exports = { createBook , getBook };