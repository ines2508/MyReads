import React, {Component} from 'react'
import BookGrid from './BooksGrid'
import shelfValue from './Shelf';

class BookShelf extends Component {
    state = {
        shelfGrid:  shelfValue
    }
    render() {

        return(
            this.state.shelfGrid.map( (shelfItem) => (
                <div key={shelfItem.value} className="bookshelf">
                    <h2 className="bookshelf-title">{shelfItem.shelfName}</h2>
                        <BookGrid key={shelfItem.value} currentShelf={shelfItem.value}/>
                </div>
            ))
            
        )
    }
}

export default BookShelf