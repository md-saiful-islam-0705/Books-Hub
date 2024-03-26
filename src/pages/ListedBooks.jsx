import { getStoredBooks } from "../utility/LocalStorage";
import BookCard from "../components/BookCard/BookCard";
import Tab from "../components/Tab/Tab";
import { useState } from "react";

const ListedBooks = () => {
  const [storedBooks, setStoredBooks] = useState(getStoredBooks());

  const handleDelete = (bookId) => {
    const updatedBooks = storedBooks.filter((book) => book.bookId !== bookId);
    setStoredBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab tab-active">
          Read Books
        </a>
        <a role="tab" className="tab ">
          Wishlist Books
        </a>
      </div>
      <div className="book-list">
        {storedBooks.map((book) => (
          <BookCard key={book.bookId} book={book} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
