import React, {Component} from 'react'
import BookGrid from './BooksGrid'

class BookShelf extends Component {
    render() {
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
                <BookGrid/>
            </div>
        )
    }
}

export default BookShelf