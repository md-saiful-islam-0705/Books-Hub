import { useEffect, useState } from 'react';
import Chart from '../components/Chart/Chart'; 
import { getStoredBooks } from '../utility/LocalStorage';
import Tab from '../components/Tab/Tab'; // Import the Tab component

const ReadPages = () => {
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedBooks = getStoredBooks();
        setReadList(storedBooks);
    }, []);


    return (
        <div>
            <h1>Pages to Read</h1>
            <Chart data={readList.filter(book => !book.wishlist)} />
        </div>
    );
};

export default ReadPages;
