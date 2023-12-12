import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddBook from "./Pages/AddBook.jsx";
import EditBook from "./Pages/EditBook.jsx";
import ShowBook from "./Pages/showBook.jsx";
import DeleteBook from "./Pages/DeleteBook.jsx";
import SignUp from "./Pages/SignUp.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<AddBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
