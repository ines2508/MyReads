import React from 'react'
import BackButton from './BackButton'
import SearchInput from './SearchInput'
import Shelf from './Shelf'


const Search = ({searchBook, showResult, moveBook, search, changePage, books, value, shelfs, currentShelf}) => {
    console.log(books)
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <BackButton changePage={changePage}/>
                    <SearchInput searchBook={searchBook} showResult={showResult}/>
                </div>

                   <div className="search-books-results">
                   
                   { showResult ?
                       <div className="search-book-results">
                           <Shelf books={books} value={value} moveBook={moveBook} 
                           currentShelf={currentShelf ? value : shelfs[3].value}
                           />              
                       </div>
                        : ""
                    }
                      
                   </div>       
            </div>
        )

   
}

export default Search



 
