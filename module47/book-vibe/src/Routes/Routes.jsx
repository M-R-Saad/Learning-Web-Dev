import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Errorpage from '../pages/Errorpage/Errorpage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch('booksData.json')
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch('booksData.json')
      },
      
    ]
  },
]);
