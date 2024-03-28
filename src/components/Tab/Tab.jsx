import { useState } from "react";
import PropTypes from "prop-types";
import BookCard from "../BookCard/BookCard";

const Tab = ({ books, onDelete }) => {
  const [activeTab, setActiveTab] = useState("read"); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredBooks =
    activeTab === "read"
      ? books.filter((book) => !book.wishlist)
      : books.filter((book) => book.wishlist);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Read"
        checked={activeTab === "read"}
        onChange={() => handleTabChange("read")}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {activeTab === "read" &&
          filteredBooks.map((book) => (
            <BookCard key={book.bookId} book={book} onDelete={onDelete} />
          ))}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Wishlist"
        checked={activeTab === "wishlist"}
        onChange={() => handleTabChange("wishlist")}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {activeTab === "wishlist" &&
          filteredBooks.map((book) => (
            <BookCard key={book.bookId} book={book} onDelete={onDelete} />
          ))}
      </div>
    </div>
  );
};

Tab.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Tab;

// import PropTypes from "prop-types";
// import BookCard from "../BookCard/BookCard";

// const Tab = ({ books, onTabChange, onDelete }) => {
//   const [activeTab, setActiveTab] = useState("read");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     onTabChange(tab);
//   };

//   return (
//     <div role="tablist" className="tabs tabs-lifted">
//       <input
//         type="radio"
//         name="my_tabs_2"
//         role="tab"
//         className="tab"
//         aria-label="Read"
//         checked={activeTab === "read"}
//         onChange={() => handleTabChange("read")}
//       />
//       <div
//         role="tabpanel"
//         className="tab-content bg-base-100 border-base-300 rounded-box p-6"
//       >
//         {activeTab === "read" &&
//           books.map((book) => (
//             <BookCard key={book.bookId} book={book} onDelete={onDelete} />
//           ))}
//       </div>

//       <input
//         type="radio"
//         name="my_tabs_2"
//         role="tab"
//         className="tab"
//         aria-label="Wishlist"
//         checked={activeTab === "wishlist"}
//         onChange={() => handleTabChange("wishlist")}
//       />
//       <div
//         role="tabpanel"
//         className="tab-content bg-base-100 border-base-300 rounded-box p-6"
//       >
//         {activeTab === "wishlist" &&
//           books.map((book) => (
//             <BookCard key={book.bookId} book={book} onDelete={onDelete} />
//           ))}
//       </div>
//     </div>
//   );
// };

// Tab.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onTabChange: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default Tab;
