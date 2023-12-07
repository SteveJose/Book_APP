const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },
    publishyear: { type: String, required: true },
    genre: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Book = mongoose.model("BOOK collection", bookSchema);

module.exports = Book;
