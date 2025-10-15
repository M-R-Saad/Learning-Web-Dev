import { getBookingsLS } from "./addBooking";

const removeBookingFromLocalStorage = (registrationNumber) => {
    const bookings = getBookingsLS();

    const updatedBookings = bookings.filter(booking => booking !== registrationNumber);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
};

export { 
    removeBookingFromLocalStorage as removeBookingLS 
};