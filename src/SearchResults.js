import React from 'react'
import Shelf from './Shelf'

const SearchResults = (moveBook, books, value) => {
        return(

            <div className="search-book-results">
                <Shelf moveBook={moveBook} books={books} value={value} currentShelf='none'/>
            </div>

        )
}

export default SearchResults