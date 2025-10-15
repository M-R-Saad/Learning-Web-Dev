
const getBookingsFromLocalStorage = () => {
    const bookings = localStorage.getItem('bookings');
    return bookings ? JSON.parse(bookings) : [];
}

const addBookingToLocalStorage = (registrationNumber) => {
    const bookings = getBookingsFromLocalStorage();
    bookings.push(registrationNumber);
    
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

export {
    getBookingsFromLocalStorage as getBookingsLS,
    addBookingToLocalStorage as addBookingLS
};