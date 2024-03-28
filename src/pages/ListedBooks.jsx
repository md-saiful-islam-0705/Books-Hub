import { useState, useEffect } from "react";
import { getStoredBooks } from "../utility/LocalStorage";
import Tab from "../components/Tab/Tab";
import SortDropdown from "../components/ShortDropdown/ShortDropdown";

const ListedBooks = () => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");
  const [sortBy, setSortBy] = useState("rating"); 

  useEffect(() => {
    const booksFromStorage = getStoredBooks();
    setStoredBooks(booksFromStorage);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    sortBooks(e.target.value);
  };

  const handleDelete = (bookId) => {
    const updatedBooks = storedBooks.filter((book) => book.bookId !== bookId);
    setStoredBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const sortBooks = (criteria) => {
    let sortedBooks;
    if (criteria === "rating") {
      sortedBooks = storedBooks
        .filter((book) => book.rating)
        .sort((a, b) => b.rating - a.rating); 
    } else if (criteria === "totalPages") {
      sortedBooks = storedBooks
        .filter((book) => book.totalPages)
        .sort((a, b) => b.totalPages - a.totalPages); 
    } else if (criteria === "yearOfPublishing") {
      sortedBooks = storedBooks
        .filter((book) => book.yearOfPublishing)
        .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    } else {
      sortedBooks = storedBooks;
    }
    setStoredBooks(sortedBooks);
  };

  return (
    <div>
      <div>
        <h1 className="text-center p-5 border rounded-xl my-3 font-bold text-3xl text-gray-600 shadow-sm">
          Books
        </h1>
      </div>
      <SortDropdown value={sortBy} onChange={handleSortChange} />
      <Tab
        activeTab={activeTab}
        onTabChange={handleTabChange}
        books={storedBooks}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ListedBooks;
