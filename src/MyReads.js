import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'


class MyReads extends Component {

    state = {
        books: []
    }

// Get all books from the server to check existing shelfs

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState ( {
            books
        }))
    }
  

    render() { 

// Make a list (without duplication) of the "server's" shelfs on which there are books

        let fullShelf = new Set([]);

        this.state.books.map( (element) => (
                                           
            fullShelf.add(element.shelf)                        
        ))
            
        return(
            
// Filter "static" shelfs and display only thoses shelfs which have books on it  

            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>   
                </div>

                <div className="list-books-content">
                    <div>  
                            {this.props.shelf

                                .filter((shelfItem) => 
                                    (fullShelf.has(shelfItem.value) || (shelfItem.value !== 'none')))

                                .map( (shelfItem) => (

                                    <div key={shelfItem.value} className="bookshelf">

                                        <h2 className="bookshelf-title">{shelfItem.shelfName}</h2>
                                            <BooksGrid currentShelf={shelfItem.value}/>                    
                                    </div>       
                            ))}
                    </div>
                </div>

            </div>
        )
    }
}

export default MyReads
