import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { getBookingsLS } from '../../utilities/addBooking';
import { addBookingLS } from '../../utilities/addBooking';
import { removeBookingLS } from '../../utilities/removeBooking';
import { BookedContext } from '../../Context/Context';

const Root = () => {
    const [bookedDoctors, setBookedDoctors] = useState([]);

    useEffect(() => {
        const bookings = getBookingsLS();
        setBookedDoctors(bookings);
    }, []);

    const addBooking = (registrationNumber) => {
        addBookingLS(registrationNumber);
        setBookedDoctors([...bookedDoctors, registrationNumber]);
    };

    const removeBooking = (registrationNumber) => {
        removeBookingLS(registrationNumber);
        setBookedDoctors(bookedDoctors.filter(id => id !== registrationNumber));
    };

    const isDoctorBooked = (registrationNumber) => {
        return bookedDoctors.includes(registrationNumber);
    };

    const contextValue = {
        bookedDoctors,
        addBooking,
        removeBooking,
        isDoctorBooked
    };

    return (
        <div className="bg-gray-100">
            <Navbar />
            <BookedContext.Provider value={contextValue}>
                <Outlet />
            </BookedContext.Provider>
            <Footer />
        </div>
    );
};

export default Root;