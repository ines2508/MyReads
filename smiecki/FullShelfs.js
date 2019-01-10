//import React, {Component} from 'react'
//import * as BooksAPI from './BooksAPI'


class FullShelfs extends Component {
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

        let fullShelf = new Set([]);

        this.state.books.map( (element) => (
                                           
            fullShelf.add(element.shelf)
                                
        ))

        return(       
                
            fullShelf
        )
    }
}

//export default FullShelfs