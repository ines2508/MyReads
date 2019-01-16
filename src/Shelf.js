import React from 'react'
import Book from './Book';

const Shelf = ({books, currentShelf, value, moveBook}) => {

// Check the position of the book and display book on that shelf

  

        return(
                <ol className="books-grid">

                    {books
                        .filter((book) => (
                                book.shelf === currentShelf
                                ))
                        .map((book) => (

                            <li key={book.id}>
                                <Book book={book} value={value} moveBook={moveBook}/>
                            </li>
                        ))
                    }
                   
                </ol>
        )
    
}




export default Shelf