import Swal from 'sweetalert2';

const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('readList');

    return storedBooks ? JSON.parse(storedBooks) : [];
}

const addBookToDB = (id) => {
    const storedBooks = getStoredBooks();

    if (storedBooks.includes(id)) {
        Swal.fire({
            title: "Warning",
            text: "You have already marked this book as read.",
            icon: "warning"
        });
    }
    else {      
        storedBooks.push(id);
        localStorage.setItem('readList', JSON.stringify(storedBooks));
        Swal.fire({
            title: "Success",
            text: "You have marked this book as read!",
            icon: "success"
        });
    }
}

export {
    getStoredBooks,
    addBookToDB
}