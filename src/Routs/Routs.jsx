import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';


export const router = createBrowserRouter([
    {
      path: "/",
     Component: Root,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
        {
            index:true,
            loader:() => fetch('bookData.json'),
             path: "/",
             Component:Home
            },
            {
                path: '/about',
                Component: About,

            },
            {
                path: '/bookDetails/:id',
                Component: BookDetails,
            }
    ]
    },
  ]);