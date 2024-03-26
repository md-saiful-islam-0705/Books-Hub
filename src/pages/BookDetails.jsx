import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorage, getFromLocalStorage } from "../utility/LocalStroge"; // You may need to adjust this import based on your local storage utility functions







const BookDetails = () => {
    const [clicked, setClicked] = useState(false);
    
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);

  if (!book) {
    return (
      <div>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }
  const handleButtonClick = (action) => {
    
    if (!clicked) {
      // Show toast notification
      toast(`Item added to local storage and marked as ${action}!`);
      saveToLocalStorage(bookId);
      setClicked(true);
    } else {
      toast(`Item already added to local storage and marked as ${action}!`);
    }
  };
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="lg:flex justify-between gap-20  rounded-xl p-10 mt-10 shadow-xl">
      <div className=" rounded-2xl shadow-xl bg-white p-10 ">
        <img src={image} alt={bookName} className="w-[500px] h-[400px] " />
      </div>
      <div className="space-y-3">
        <h1 className="text-5xl font-serif font-semibold">{bookName}</h1>
        <p className="text-lg text-gray-500 font-bold">By: {author}</p>
        <hr />
        <p className="text-lg font-bold">{category}</p>
        <hr />
        <p className="text-lg ">
          <span className="font-bold">Review:</span> {review}
        </p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-pink-400 p-2 rounded-full mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
        <hr />
        <p className="text-lg ">
          <span className="font-bold">Total Pages:</span> {totalPages}
        </p>
        <p className="text-lg ">
          <span className="font-bold">Publisher:</span> {publisher}
        </p>
        <p className="text-lg ">
          <span className="font-bold">Year of Publishing:</span>{" "}
          {yearOfPublishing}
        </p>
        <p className="text-lg ">
          <span className="font-bold">Rating:</span> {rating}
        </p>
        <div className="flex gap-2">
          <Link to="./listedBooks">
            <Button
              size="md"
              variant="outlined"
              className="hidden lg:inline-block border-pink-300"
              onClick={() => handleButtonClick("Read")}
            >
              <span>Read</span>
            </Button>
          </Link>
          <Link to="./listedBooks">
            <Button
              size="md"
              className="hidden lg:inline-block bg-gradient-to-r from-purple-500 to-pink-300"
              onClick={() => handleButtonClick("Wishlist")}
            >
              <span>Wish List</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    bookName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
    publisher: PropTypes.string.isRequired,
    yearOfPublishing: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookDetails;
