import React from 'react'
import Book from './Book';

const Shelf = ({books, search, currentShelf, value, moveBook}) => {

// Check the position of the book and display book on that shelf
console.log(books)

        return(
                <ol className="books-grid">

                    {books
                        .filter((book) => ( 
                                "shelf" in book ? book.shelf === currentShelf 
                                : book.shelf = currentShelf
                        ))
                        .map((book) => (

                            <li key={book.id}>
                                <Book book={book} 
                                      value={value} 
                                      moveBook={moveBook}
                                />
                            </li>
                        ))
                    }
                   
                </ol>
        )
    
}




export default Shelf