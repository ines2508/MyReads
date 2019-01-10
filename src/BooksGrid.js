import React, {Component} from 'react'
import Book from './BookItem';
import shelfValue from './Shelf';
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'


class BooksGrid extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState ( {
            books
        }))
    }
   
    render() {

        return(

            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.state.books
                    .filter( (book) => 
                        (book.shelf === this.props.currentShelf))
                    .map( (book) => (
                        <li key={book.id}><Book key={book.id} bookInfo={book}/></li>
                    ))}
                   
                </ol>
            </div>
        )
    }
}

export default BooksGrid 