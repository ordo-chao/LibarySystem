const bookSchema = require("../Models/book.model");

const GuestController = async (req, res) => {
  const trending = await bookSchema.find({ isTrending: true }).limit(7);
  const booksforyou = await bookSchema.find({ booksforyou: true }).limit(7);
  const discounted = await bookSchema.find({ discountPrice: {$gt: 0} }).limit(7);
  const arrivals = await bookSchema.find({ isArrival: true }).limit(7);
  const recommended = await bookSchema.find({ isRecommended: true }).limit(7);
  const genre = await bookSchema.find({ genre: "Fiction" }).limit(7);
  res.status(200).json({
    trending,
    booksforyou,
    discounted,
    arrivals,
    recommended,
    genre
  })
}

const UserPageController = async (req, res) => {
  console.log(req.body)
    const trending = await bookSchema.find({ isTrending: true }).limit(7);
  const booksforyou = await bookSchema.find({ booksforyou: true }).limit(7);
  const discounted = await bookSchema.find({ discountPrice: {$gt: 0} }).limit(7);
  const arrivals = await bookSchema.find({ isArrival: true }).limit(7);
  const recommended = await bookSchema.find({ isRecommended: true }).limit(7);
  const genre = await bookSchema.find({ genre: "Fiction" }).limit(7);
  res.status(200).json({
    trending,
    booksforyou,
    discounted,
    arrivals,
    recommended,
    genre
  })
}

module.exports = {
  GuestController,
  UserPageController
}