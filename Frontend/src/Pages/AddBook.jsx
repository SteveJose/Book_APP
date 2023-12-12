import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExitButton from "../Component/ExitButton";
import { Spinner } from "../Component/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    author: "",
    published: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    const { id, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  const handleSaveBook = async () => {
    setLoading(true);
    axios
      .post("http://localhost:5555/books", form)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An Error happened. Try check console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <ExitButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={handleSaveBook}
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
          <button
            type="submit"
            className="p-2 bg-sky-300 m-8"
            onclick={handleSaveBook}
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateBook;
