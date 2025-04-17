const multer = require("multer");
const path = require("path");

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter for validation
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "pdfUrl" && file.mimetype === "application/pdf") {
    cb(null, true);  // PDF is allowed for the pdfUrl
  } else if (file.fieldname === "coverImage" && file.mimetype.startsWith("image/")) {
    cb(null, true);  // Any image is allowed for coverImage
  } else {
    cb(new Error("Only PDFs for pdfUrl and images for coverImage are allowed!"), false);
  }
};

// Set up multer with fields (multiple fields for file uploads)
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).fields([
  { name: "coverImage", maxCount: 1 },  // Handle one cover image
  { name: "pdfUrl", maxCount: 1 },      // Handle one PDF file
]);

module.exports = upload;
