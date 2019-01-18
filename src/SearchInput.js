import React from 'react'

const SearchInput = ({searchBook, showResult, books}) => {
  
        return(
            <div className="search-books-input-wraper">
                <input type="text" placeholder="Search by title or author" onChange={event => {searchBook(event.target.value, event.target.value.length )}}/>
            </div>
        )
    
}

export default SearchInput