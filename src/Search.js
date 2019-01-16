import React, {Component} from 'react'
import BackButton from './BackButton'

class Search extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <BackButton changePage={this.props.changePage}/>
                </div>
            </div>
        )
    }
}

export default Search