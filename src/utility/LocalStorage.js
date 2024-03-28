const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBook = (book) => {
  const storedBooks = getStoredBooks();
  const exists = storedBooks.find((b) => b.bookId === book.bookId);

  if (!exists) {
    storedBooks.push(book);
    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBook };
