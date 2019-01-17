import React from 'react'

const SearchInput = ({searchBook, books}) => {
  
        return(
            <div className="search-books-input-wraper">
                <input type="text" placeholder="Search by title or author" onChange={event => {searchBook(event.target.value, true )}}/>
            </div>
        )
    
}

export default SearchInput