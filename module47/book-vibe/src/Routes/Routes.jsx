import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/Errorpage/Errorpage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import PagesToRead from '../pages/PagesToRead/PagesToRead';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/booksData.json') // changed from './booksData.json' to '/booksData.json'
      },
      {
        path: "/readList",
        Component: ReadList,
        loader: () => fetch('/booksData.json') // this was the main reason for the routing error
      },
      {
        path: "/pagesToRead",
        Component: PagesToRead,
        loader: () => fetch('/booksData.json') // added this loader to avoid routing error
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch('/booksData.json') // somehow the map, find functions were not a function without this
      },  
    ]
  },
]);
