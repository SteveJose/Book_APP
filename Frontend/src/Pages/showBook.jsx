import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ExitButton from "../Component/ExitButton";
import { Spinner } from "../Component/Spinner.jsx";
import { endpoints } from "../utils/urls.js";

const showBook = () => {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { getBookById } = endpoints;

  useEffect(() => {
    setLoading(true);
    axios
      .get(getBookById(id))
      .then((res) => {
        console.log(res.data); // Log the response data
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  // Log the value of the book object
  return (
    <div className="p-4">
      <ExitButton />
      <h1 className="text-3xl my-4">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        book && (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>{" "}
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
              {console.log(book.title)}
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Published Year</span>
              <span>{book.publishyear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Genre</span>
              <span>{book.genre}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book.createdAt).toLocaleString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Update Time</span>
              <span>{new Date(book.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default showBook;
