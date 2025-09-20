function Books({ book }) {
    const { title, author, price } = book;

    if(price > 15) {
        return (
            <li className="todo">Book Title: {title}, Author: {author}, Price: ${price}</li>
        );
    } 
    else {
        return (
            <li className="todo">This book is not expensive.</li>
        );
    }
}

export default Books;