import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import shelfValue from './ListShelfs';

class MyReads extends Component {

    state = {
        books: [],
        shelfs: shelfValue,
        newShelf: "",
        value: ""
    }

// Get all books from the server to check existing shelfs

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState ( {
            books
        }))
    }

// Move book to new shelf

    moveBook = (book, shelf) => {

        BooksAPI.update(book, shelf).then(response => {
            BooksAPI.getAll().then(books => {this.setState({books})})
        })
    }
  

    render() { 

// Make a list (without duplication) of the "server's" shelfs on which there are books

        let fullShelf = new Set([]);

        this.state.books.map( (element) => (
                                           
            fullShelf.add(element.shelf)                        
        ))

            
        return(
            
// Filter "static" shelfs and display only thoses shelfs which aren't empty

            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>   
                </div>

                <div className="list-books-content">
                    <div>  
                            {this.state.shelfs

                                .filter((shelfItem) => 
                                    (fullShelf.has(shelfItem.value) && (shelfItem.value !== 'none')))

                                .map( (shelfItem) => (

                                    <div key={shelfItem.value} className="bookshelf">

                                        <h2 className="bookshelf-title">{shelfItem.shelfName}</h2>
                                            <Shelf currentShelf={shelfItem.value}
                                                    books={this.state.books}
                                                    value={this.state.value}
                                                    moveBook={this.moveBook}
                                            />
                  
                                    </div>       
                            ))}
                    </div>
                </div>

            </div>
        )
    }
}

export default MyReads
