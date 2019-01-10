import React, {Component} from 'react'
import BooksGrid from './BooksGrid'
// import shelfValue from './Shelf';

class BookShelf extends Component {

    render() {

// Create "static" shelfs from the list        
        return(
            this.props.shelf
            .filter((shelfItem) => (shelfItem.value !== 'none'))
            .map( (shelfItem) => (
                <div key={shelfItem.value} className="bookshelf">
                    <h2 className="bookshelf-title">{shelfItem.shelfName}</h2>
                        <BooksGrid currentShelf={shelfItem.value}/>
                </div>
            ))
            
        )
    }
}

export default BookShelf