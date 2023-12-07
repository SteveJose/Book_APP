import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../Component/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        console.log(res.data.books); // Log the books array
        setBooks(res.data.books); // Update the state with the books array
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-bold">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-800" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="bg-slate-300">
              <th className="border border-slate-600 p-4 rounded-md ">No</th>
              <th className="border border-slate-600 p-4 rounded-md">Title</th>
              <th className="border border-slate-600 p-4 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 p-4 rounded-md max-md:hidden ">
                Publish Year
              </th>
              <th className="border border-slate-600 p-4 rounded-md max-md:hidden ">Genre</th>
              <th className="border border-slate-600 p-4 rounded-md ">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => (
                <tr key={book._id} className="h-8 ">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.title}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.author}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.publishyear}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.genre}
                  </td>
                  <td className="border border-slate-700 p-4 text-left">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-800" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-800" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
