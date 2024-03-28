import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiBook } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const BookCard = ({ book, onDelete }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleDelete = () => {
    onDelete(book.bookId); 
  };

  return (
    <div className="book-card relative lg:flex-row md:flex-row flex flex-col items-center  gap-6 border rounded-md p-3 my-5">
      <div className="rounded-2xl shadow-md bg-gray-50 w-64 h-64 p-10 lg:my-0 my-4 ">
        <img src={image} alt={bookName} className=" " />
      </div>
      <div className="book-details space-y-1">
        <h1 className="text-2xl font-serif font-semibold">{bookName}</h1>
        <p className="text-sm text-gray-500 font-bold">By: {author}</p>
        <hr />
        <div className="flex flex-wrap py-2 gap-2">
          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-pink-400 p-2 rounded-full mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <CiLocationOn className="text-xl" />
            </div>
            <div>
              <p className="text-sm ">
                <span className="font-bold">Year of Publishing:</span>{" "}
                {yearOfPublishing}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex gap-4 my-4 items-center">
          <div className="flex gap-1 items-center">
            <FiBook />
            <p className="text-sm ">
              <span className="font-bold">Pages:</span> {totalPages}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <CgProfile />
            <p className="text-sm ">
              <span className="font-bold">Publisher:</span> {publisher}
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col  items-center gap-2 ">
          <p className="text-sm py-2 px-3 bg-pink-100 lg:w-auto w-full  rounded-full">
            <span className="font-bold">Category:</span> {category}
          </p>
          <p className="text-sm py-2 px-3 bg-blue-100 lg:w-auto w-full  rounded-full">
            <span className="font-bold">Rating: </span> {rating}
          </p>
          <Link
            to={`/bookDetails/${bookId}`}
            className="btn btn-sm btn-outline rounded-full lg:w-auto w-full "
          >
            View Details
          </Link>
        </div>
        <button
          className="bg-gray-100 p-3 absolute  -top-5 -right-5 rounded-full"
          onClick={handleDelete}
        >
          <ImCross className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalPages: PropTypes.number.isRequired,
    publisher: PropTypes.string.isRequired,
    yearOfPublishing: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    bookId: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookCard;
