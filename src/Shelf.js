import React from 'react'
import Book from './Book';

const Shelf = ({books, searchList, selectedValue, currentShelf, moveBook}) => {

// Show different shelf if book from searchList is in books

    function returnShelf(book, books) {

        if (books.filter((unknownBook) => book.id === unknownBook.id).length !== 0) {
            
            return books.filter((unknownBook) => book.id === unknownBook.id)[0].shelf;
        
        } else {
            
            return 'none';
        }
    } 


// Display book from books on accurate shelf

        return(
                <ol className="books-grid">

                    {   (searchList 
                        ?   searchList
                    
                        :   (books.filter((book) => (
                                ( book.shelf  === currentShelf)
                            )))
                        )

                        .map((book) => (

                            <li key={book.id} >
                                <Book book={book}
                                      books={books}
                                      searchList={searchList}
                                      moveBook={moveBook}
                                      selectedValue={selectedValue}
                                      shelfValue={returnShelf(book, books)}
                                />
                            </li>
                        ))
                    }
                                       
                </ol>
        )    
}




export default Shelf