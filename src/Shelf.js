import React from 'react'
import Book from './Book';

const Shelf = ({books, searchList, currentShelf, value, moveBook, noneShelf}) => {


// Check the position of the book and display book on that shelf
        return(
                <ol className="books-grid">

                    {(searchList ? searchList : books)
                        .filter((book) => (
                            ( !("shelf" in book) ?  book.shelf="none" : book.shelf)
                         // (!("shelf" in book) ? (book.shelf = "none") : book.shelf)
                         ===  (book.shelf === "none" ? (currentShelf = "none") : currentShelf)
                        ))

                        .map((book) => (

                            <li key={book.id}>
                                <Book book={book}
                                      value={value} 
                                      moveBook={moveBook}/>
                            </li>
                        ))
                    }
                   
                </ol>
        )
    
}




export default Shelf