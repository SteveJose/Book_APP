const express = require("express");
const router = express.Router();
const Book = require("../model/bookmodel.js");


const {
 getAllBook,
 getBySingleBook,
 createBook,
 replaceBook,
 editBook,
 deleteBook
} = require("../controller/bookController.js");


// get single book
router.get("/:id", getBySingleBook);
// get all books
router.get("/", getAllBook);
// add new book
router.post("/",createBook );
// edit book
router.patch("/:id", editBook);

// update book
router.put("/:id",replaceBook);
// delete book
router.delete("/:id", deleteBook);

module.exports = router;
