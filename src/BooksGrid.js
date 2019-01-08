import React, {Component} from 'react'
import Book from './BookItem';

class BooksGrid extends Component {
    render() {
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li><Book/></li>
                    <li><Book/></li>
                    <li><Book/></li>
                </ol>
            </div>
        )
    }
}

export default BooksGrid 