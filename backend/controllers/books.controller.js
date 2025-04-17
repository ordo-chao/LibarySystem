const bookSchema = require("../Models/book.model");

const createBook = async (req, res) => {
  try {
  const { title, author, isbn, genre, description, price, stock, rackNumber, publisher, publishedDate, language, isTrending, isNewArrival, isRecommended, tags } = req.body;

  // Get file paths for uploaded files
  const coverImage = req.files.coverImage ? req.files.coverImage[0].path : null;
  const pdfUrl = req.files.pdfUrl ? req.files.pdfUrl[0].path : null;

  // Create new book entry in database
  const book = new bookSchema({
    title,
    author,
    isbn,
    genre,
    description,
    coverImage,
    price,
    stock,
    rackNumber,
    publisher,
    publishedDate,
    language,
    isTrending: isTrending ? true : false,
    isNewArrival: isNewArrival ? true : false,
    isRecommended: isRecommended ? true : false,
    tags: tags.split(','),
    pdfUrl
  });

  await book.save();
  res.json({ message: 'Book created successfully!', book });
} catch (err) {
  console.error(err);
  res.status(500).json({ message: 'Failed to create book.' });
};
}

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