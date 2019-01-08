import React, {Component} from 'react'

class BookShelfChanger extends Component {
    render() {
        return(
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>

                    {this.props.shelf.map( (element) => (
                        <option key={element.value} value={element.value}>{element.shelfName}</option>
                        )
                    )}

                </select>  
          </div>
        )
    }
}

export default BookShelfChanger