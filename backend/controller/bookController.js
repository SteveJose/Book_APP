const Book = require("../model/bookmodel.js");
// get single Book
async function getBySingleBook(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

// Get all Book
async function getAllBook(req, res) {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      books: books,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}
// Add new book
async function createBook(req, res) {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishyear ||
      !req.body.genre
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishyear: req.body.publishyear,
      genre: req.body.genre,
    };
    const book = await Book.create(newBook);
    console.log(book);
    return res.status(201).json(book);
    // const book = req.body;
    // const newBook = new bookmodel(book);
    // await newBook.save();
    // res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}
// ReplaceBook
async function replaceBook(req, res) {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishyear ||
      !req.body.genre
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

// Edit Book
async function editBook(req, res) {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}
// Delete Book
async function deleteBook(req, res) {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllBook,
  getBySingleBook,
  createBook,
  replaceBook,
  editBook,
  deleteBook,
};
