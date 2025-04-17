// models/Book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      unique: true,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "Fiction",
        "Non-Fiction",
        "Romance",
        "Science Fiction",
        "Mystery & Thriller",
        "Self-help",
        "Biography",
        "History",
        "Poetry",
        "Mathematics",
        "Computer Science",
        "Business Studies",
        "Literature",
        "Philosophy",
        "Religious Studies",
      ],
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String, // Path or URL
    },
    samplePages: {
      type: Number,
      default: 10,
    },
    pages: {
      type: Number,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    stock: {
      type: Number,
      default: 0,
    },
    rackNumber: {
      type: String,
    },
    publisher: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    language: {
      type: String,
      default: "English",
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
    isNewArrival: {
      type: Boolean,
      default: false,
    },
    isRecommended: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
    },
    requestCount: {
      type: Number,
      default: 0,
    },
    ratingsAverage: {
      type: Number,
      default: 0,
    },
    ratingsCount: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    vendor: {
      name: String,
      contact: String,
      address: String,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    pdfUrl: {
      type: String, // Path or URL to the actual PDF file
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
