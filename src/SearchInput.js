import React from 'react'

const SearchInput = ({searchBook, query, searchList}) => {
  
        return(
            <div className="search-books-input-wraper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={query} 
                       onChange={event => {searchBook(event.target.value.trimStart(), event.target.value.length)}}/>
            </div>
        )
    
}

export default SearchInput