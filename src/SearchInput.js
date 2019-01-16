import React, {Component} from 'react'

class SearchInput extends Component {
    render() {
        return(
            <div className="search-books-input-wraper">
                <input type="text" placeholder="Search by title or author"/>
            </div>
        )
    }
}

export default SearchInput