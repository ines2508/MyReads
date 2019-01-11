import React, {Component} from 'react'
import Book from './Book';

class Shelf extends Component {

// Check the position of the book and display book on that shelf

    render() {

        return(
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {this.props.books
                        .filter((book) => (
                                book.shelf === this.props.currentShelf
                                ))
                        .map((book) => (

                            <li key={book.id}>
                                <Book book={book} value={this.props.value} moveBook={this.props.moveBook}/>
                            </li>
                        ))
                    }
                   
                </ol>
            </div>
        )
    }
}




export default Shelf