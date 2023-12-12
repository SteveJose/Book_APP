import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExitButton from "../Component/ExitButton";
import { Spinner } from "../Component/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    publishyear: "",
    genre: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    handleGetBook();
  }, []); // Empty dependency array ensures that the effect runs only once, when the component mounts

  const handleGetBook = () => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setLoading(false);
        setForm(res.data); // Update the form state with the book data
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occurred. Please check the console.");
        console.log(err);
      });
  };
  function handleChange(event) {
    const { id, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const handleEditBook = async () => {
    event.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, form) // Use the book ID in the URL
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
    <div className="p-4">
      <ExitButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={handleEditBook}
          className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
        >
          <div className="my-4">
            <label
              className="  text-gray-500 text-xl font-bold mr-4"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter Title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label className=" text-gray-500 text-xl font-bold mr-4">
              Author
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="author"
              type="text"
              placeholder="Enter Author"
              value={form.author}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className=" text-gray-500 text-xl font-bold mr-4"
              htmlFor="publishyear"
            >
              Publish Year
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="publishyear"
              type="number"
              placeholder="Enter Publish Year"
              value={form.publishyear}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className=" text-gray-500 text-xl font-bold mr-4"
              htmlFor="genre"
            >
              Genre
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="genre"
              type="text"
              placeholder="Enter Genre"
              value={form.genre}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="p-2 bg-sky-300 m-8">
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default EditBook;
