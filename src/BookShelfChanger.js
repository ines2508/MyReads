import React, {Component} from 'react'
import BooksGrid from './BooksGrid'

class BookShelfChanger extends Component {
    state = {
        'position': this.props.shelfD.shelf
    }

    moveBook = (event) => {
        this.setState({
            'position': event.target.value
        })
    }

    render() {
        
        return(
            <div className="book-shelf-changer">
                <select value={this.state.position} onChange={this.moveBook}>
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