import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import { StrictMode } from 'react';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import Banner from './components/Banner/Banner.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ReadBooks from './components/ReadBooks/ReadBooks.jsx';
import WishlistBook from './components/WishlistBook/WishlistBook.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('book.json'),
        children: [
          {
            path: 'readBook',
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist',
            element: <WishlistBook></WishlistBook>
          }
        ]
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader:()=> fetch('book.json')
      },
      {
        path: '/banner',
        element: <Banner></Banner>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('book.json')
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
