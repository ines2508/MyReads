import React, {Component} from 'react'
import BackButton from './BackButton'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'


class Search extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <BackButton changePage={this.props.changePage}/>
                    <SearchInput/>
                </div>
                    <SearchResults/>
            </div>
        )
    }
}

export default Search