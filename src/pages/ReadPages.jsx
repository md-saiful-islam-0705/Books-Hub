import { useEffect, useState } from "react";
import Chart from "../components/Chart/Chart";
import { getStoredBooks } from "../utility/LocalStorage";

const ReadPages = () => {
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedBooks = getStoredBooks();
    setReadList(storedBooks);
  }, []);

  return (
    <div className="my-5">
      <Chart data={readList.filter((book) => !book.wishlist)} />
    </div>
  );
};

export default ReadPages;
