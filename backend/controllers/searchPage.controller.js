const bookSchema = require("../Models/book.model");
const filterController = async (req, res) => {
  console.log(req.body.timeFrame);

  if(req.body.timeFrame){
    const timeFrame = req.body.timeFrame;
    const books = await bookSchema.find({ timeFrame: timeFrame });
    if(req.body.genre)
      {
        books = books.filter(book => book.genre === req.body.genre);
      }
    if(req.body.price)
      {
        if(req.body.price < 500)
          {
            books = books.filter(book => book.price < 500);
          }
        else if(req.body.price < 1000)
          {
            books = books.filter(book => book.price < 1000);
          }
        else
          {
            books = books.filter(book => book.price > 1000);
          }
      }
    if(req.body.rating)
      {
        if(req.body.rating < 1)
          {
            books = books.filter(book => book.rating < 1);
          }
        else if(req.body.rating < 2)
          {
            books = books.filter(book => book.rating < 2);
          }
        else if(req.body.rating < 3)
          {
            books = books.filter(book => book.rating < 3);
          }
        else if(req.body.rating < 4)
          {
            books = books.filter(book => book.rating < 4);
          }
        else
          {
            books = books.filter(book => book.rating > 4);
          }
      }
    res.status(200).json(books);
  }
  res.send("Search logic will go here.");
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
