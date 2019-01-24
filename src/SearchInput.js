import React from 'react'

const SearchInput = ({searchBook, query, searchList, showResult, books}) => {
  
        return(
            <div className="search-books-input-wraper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={query} 
                       onChange={event => {searchBook(event.target.value.trim(), event.target.value.length, searchList.lenght )}}/>
            </div>
        )
    
}

export default SearchInput