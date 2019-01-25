import React from 'react'
import BackButton from './BackButton'
import SearchInput from './SearchInput'
import Shelf from './Shelf'


const Search = ({searchBook, closeResult, query, bookId, searchBookId, showResult, moveBook, books, searchList, value, shelfs, currentShelf}) => {
        
    console.log(bookId)
    return (
            <div className="search-books">
                <div className="search-books-bar">
                    <BackButton/>
                    <SearchInput searchBook={searchBook} 
                                 showResult={showResult}
                                 searchList={searchList}
                                 query={query}
                    />

                </div>

                   <div className="search-books-results">
                   
                    { showResult ?
                            <div className="search-book-results">
                                <Shelf 
                                    books={books}
                                    searchList={searchList}
                                    searchBookId={searchBookId} 
                                    value={value}
                                    bookId={bookId} 
                                    moveBook={moveBook} 
                                    // Books get default shelf "none"
                                    currentShelf={!currentShelf ? currentShelf="none" : currentShelf}
                                />              
                            </div>
                        : ""                              
                    }
                      
                   </div>       
            </div>
        )

   
}

export default Search



 
