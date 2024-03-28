import Book from "../Book/Book";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const books = useLoaderData();

  if (!books) {
    return (
      <div>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl my-5 font-semibold text-center">Books</h1>
      <div className="container grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
