import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, author, tags, bookName, rating, category, bookId } = book;

  return (
    <Link to={`/bookDetails/${bookId}`} className="block mb-4">
      <div className="card w-full h-full md:w-full bg-base-100 px-4 md:px-10 py-4 hover:scale-105 md:py-5 shadow-md">
        <figure className="bg-gray-200 px-4 md:px-10 py-4 md:py-8 rounded-xl">
          <img src={image} alt={bookName} />
        </figure>
        <div className="py-3">
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-pink-300 p-2 rounded-full mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="text-gray-500">
            By: <span className=" ">{author}</span>
          </p>

          <div className="flex justify-between items-center my-1 text-gray-600">
            <p>{category}</p>
            <div className="flex items-center gap-2">
              <p>{rating} </p>
              <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    bookName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    bookId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
