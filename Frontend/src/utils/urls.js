const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5555"
    : "https://relieved-seal-sun-hat.cyclic.app";

export const endpoints = {
  getAllBooks: `${baseUrl}/books`,
  addBook: `${baseUrl}/books`,
  getBookById: function (id) {
    return `${baseUrl}/books/${id}`;
  },
  deleteBook: function (id) {
    return `${baseUrl}/books/${id}`;
  },
  updateBook: function (id) {
    return `${baseUrl}/books/${id}`;
  },
};
