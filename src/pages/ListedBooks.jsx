import { useState } from "react";
import { getStoredBooks } from "../utility/LocalStorage";
import Tab from "../components/Tab/Tab";

const ListedBooks = () => {
  const [storedBooks, setStoredBooks] = useState(getStoredBooks());
  const [activeTab, setActiveTab] = useState("read");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDelete = (bookId) => {
    const updatedBooks = storedBooks.filter((book) => book.bookId !== bookId);
    setStoredBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <div>
      <Tab
        books={storedBooks}
        activeTab={activeTab}
        onDelete={handleDelete}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default ListedBooks;

// import { getStoredBooks } from "../utility/LocalStorage";
// import BookCard from "../components/BookCard/BookCard";
// import Tab from "../components/Tab/Tab";
// import { useState } from "react";

// const ListedBooks = () => {
//   const [storedBooks, setStoredBooks] = useState(getStoredBooks());

//   const handleDelete = (bookId) => {
//     const updatedBooks = storedBooks.filter((book) => book.bookId !== bookId);
//     setStoredBooks(updatedBooks);
//     localStorage.setItem('books', JSON.stringify(updatedBooks));
//   };

//   return (
//     <div>
//       <div className="book-list">
//         {storedBooks.map((book) => (
//           <BookCard key={book.bookId} book={book} onDelete={handleDelete}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListedBooks;

// ListedBooks.js

// ListedBooks.js
