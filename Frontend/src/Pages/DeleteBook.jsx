import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExitButton from "../Component/ExitButton";
import { Spinner } from "../Component/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occurred. Please check the console.");
        console.log(err);
      });
  };
  return (
    <div className="p-4 mx-auto">
      <ExitButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex mx-auto flex-col items-center border-2 shadow-md border-sky-500 rounded-xl w-[600px] p-8 ">
          <p className="text-lg">Are you sure you want to delete this book?</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold m-8 w-full rounded-md py-2 px-4"
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
