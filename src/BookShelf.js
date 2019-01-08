import React, {Component} from 'react'
import BookGrid from './BooksGrid'
import shelfValue from './Shelf';

class BookShelf extends Component {
    render() {
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
                <BookGrid shelf={shelfValue}/>
            </div>
        )
    }
}

export default BookShelf