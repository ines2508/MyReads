import React, {Component} from 'react'
import Book from './BookItem';
//import shelfValue from './Shelf';
// import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'
// import MyReads from './MyReads'


class BooksGrid extends Component {

    state = {
        books: []
    }

// Get all books from the server

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState ( {
            books
        }))
    }
   
    render() {

// Check if the book's shelf match "static" shelf and display the books        
        return(

            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.state.books
                    .filter((book) => 
                        (book.shelf === this.props.currentShelf))
                    .map((book) => (
                        <li key={book.id}>
                            <Book bookInfo={book}/>
                        </li>
                    ))}
                   
                </ol>
            </div>
        )
    }
}

export default BooksGrid 