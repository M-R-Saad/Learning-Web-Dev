import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import MyBookings from '../pages/MyBookings/MyBookings';

export const router = createBrowserRouter([{
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            Component: Home,
            loader: () => fetch('./doctors.json'),
        },
        {
            path: '/myBookings',
            Component: MyBookings,
        }
    ],
}]);