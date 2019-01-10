import React, {Component} from 'react'
import BooksGrid from './BooksGrid'
import shelfValue from './Shelf';

class BookShelf extends Component {

    render() {

        return(
            this.props.shelf.map( (shelfItem) => (
                <div key={shelfItem.value} className="bookshelf">
                    <h2 className="bookshelf-title">{shelfItem.shelfName}</h2>
                        <BooksGrid key={`Grid ${shelfValue.value}`} currentShelf={shelfItem.value}/>
                </div>
            ))
            
        )
    }
}

export default BookShelf