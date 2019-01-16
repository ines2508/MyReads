import React from 'react'
import BackButton from './BackButton'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'


const Search = ({moveBook, changePage, books, value}) => {
   
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <BackButton changePage={changePage}/>
                    <SearchInput/>
                </div>
                    <SearchResults books={books}
                                   value={value}
                                   moveBook={moveBook}
                    />
            </div>
        )
   
}

export default Search