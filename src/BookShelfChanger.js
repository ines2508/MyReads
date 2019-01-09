import React, {Component} from 'react'
import BookGrid from './BooksGrid'

class BookShelfChanger extends Component {

    moveBook = (event) => {
        let newShelf = event.target.value;
        console.log("Book was moved to " + newShelf)

        return newShelf
    }

    render() {
        console.log('This select ' + this.props.showCurrent)
        
        return(
            <div className="book-shelf-changer">
                <select value={this.props.showCurrent} onChange={this.moveBook}>
                    <option value="move" disabled>Move to...</option>

                    {this.props.shelf.map( (element) => (
                        <option key={element.value} 
                                value={element.value} 
                        >{element.shelfName}</option>
                        )      
                    )}

                </select>  
          </div>
        )
    }
}

export default BookShelfChanger