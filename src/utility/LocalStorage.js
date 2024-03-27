
// const getStoredBooks = () => {
//   const storedBooks = localStorage.getItem("books");
//   return storedBooks ? JSON.parse(storedBooks) : [];
// };

// Function to save a book to local storage
// const saveBook = book => {
// const storedBooks = getStoredBooks();
// const exists = storedBooks.find(b => b.bookId === book.bookId);

//   if (!exists) {
//     storedBooks.push(book);
//     localStorage.setItem("books", JSON.stringify(storedBooks));
//   }
// };



// export { getStoredBooks, saveBook };

const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("books");
  return storedBooks ? JSON.parse(storedBooks) : [];
};

// Function to save a book to local storage
const saveBook = (book, tab) => {
  const storedBooks = getStoredBooks();
  const exists = storedBooks.find((b) => b.bookId === book.bookId);

  if (!exists) {
    book.tab = tab; // Add tab information to the book
    storedBooks.push(book);
    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBook };




