import Books from "./Books";

function Library({books}) {
    return (
        <div>
            <ul>
                {
                    books.map( book => {
                        return <Books key={book.id} book={book}></Books>
                    })
                }
            </ul>
        </div>
    );
}

export default Library;