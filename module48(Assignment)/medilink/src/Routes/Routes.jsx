import React, { Component, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import MyBookings from '../pages/MyBookings/MyBookings';
import DoctorsDetails from '../pages/DoctorsDetails/DoctorsDetails';
import Blogs from '../pages/Blogs/Blogs';
import DoctorError from '../pages/DoctorError/DoctorError';
import Loading from '../components/Loading/Loading';

export const router = createBrowserRouter([{
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            Component: () => (
                <Suspense fallback={<Loading message="Loading doctors..." />}>
                    <Home />
                </Suspense>
            ),
            loader: () => fetch('/doctors.json'),
        },
        {
            path: '/myBookings',
            Component: () => (
                <Suspense fallback={<Loading message="Loading your bookings..." />}>
                    <MyBookings />
                </Suspense>
            ),
            loader: () => fetch('/doctors.json'),
        },
        {
            path: '/doctors/:id',
            Component: () => (
                <Suspense fallback={<Loading message="Loading doctor details..." />}>
                    <DoctorsDetails />
                </Suspense>
            ),
            loader: () => fetch('/doctors.json'),
            errorElement: <DoctorError />,
        },
        {
            path: '/blogs',
            Component: Blogs,
        }
    ],
}]);