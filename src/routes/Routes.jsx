import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../pages/Home';
import ListedBooks from '../pages/ListedBooks';
import ReadPages from '../pages/ReadPages';
import About from '../pages/About';
import News from '../pages/News';
import BookDetails from '../pages/BookDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/books.json'),
        children: []
      },
      {
        path: '/listedBooks',
        element: <ListedBooks />,
      },
      {
        path: '/readPages',
        element: <ReadPages/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/news',
        element: <News/>
      },
      {
        path: '/bookDetails/:bookId', 
        element: <BookDetails />,
        loader: () => fetch('/books.json'),
      },
    ],
  },
]);
