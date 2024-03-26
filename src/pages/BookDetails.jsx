import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";
import "react-toastify/dist/ReactToastify.css";
import { saveBook } from "../utility/LocalStorage";
import { useState } from "react";

const BookDetails = () => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [isAddedToRead, setIsAddedToRead] = useState(false);

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

  const handleReadButtonClick = () => {
    if (!isAddedToRead) {
      saveBook(book);
      toast.success("Book added to Read");
      setIsAddedToRead(true);
      setIsAddedToWishlist(true);
    } else {
      toast.error("Book already added to Read");
    }
  };
  const handleWishlistButtonClick = () => {
    if (!isAddedToWishlist && !isAddedToRead) {
      saveBook(book);
      toast.success("Book added to Wishlist");
      setIsAddedToWishlist(true);
    } else if (isAddedToRead) {
      toast.error("Book already added to Read, cannot be added to Wishlist");
    } else {
      toast.error("Book already added to Wishlist");
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
    <div className="lg:flex justify-between  gap-20 rounded-xl p-10 mt-10 shadow-xl">
      <div className="rounded-2xl shadow-xl bg-white p-10 lg:my-0 my-4 ">
        <img src={image} alt={bookName} className="lg:w-[500px] h-[400px] " />
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
          <Button
            size="md"
            variant="outlined"
            className=" lg:inline-block border-pink-300"
            onClick={handleReadButtonClick}
          >
            <span>Read</span>
          </Button>
          <Button
            size="md"
            className=" lg:inline-block bg-gradient-to-r from-purple-500 to-pink-300"
            onClick={handleWishlistButtonClick}
          >
            <span>Wish List</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
