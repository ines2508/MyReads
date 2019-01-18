import React from 'react'
import BackButton from './BackButton'
import SearchInput from './SearchInput'
import Shelf from './Shelf'


const Search = ({searchBook, bookId, searchBookId, showResult, moveBook, changePage, books, searchList, value, shelfs, currentShelf}) => {
        
    console.log(bookId)
    return (
            <div className="search-books">
                <div className="search-books-bar">
                    <BackButton changePage={changePage}/>
                    <SearchInput searchBook={searchBook} 
                                 showResult={showResult}/>
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
                                currentShelf={currentShelf}
                           />              
                       </div>
                        : ""
                    }
                      
                   </div>       
            </div>
        )

   
}

export default Search



 
