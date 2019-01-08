import React, {Component} from 'react'

class BookAuthor extends Component {
    render() {
        return(
            <div className="book-authors">{this.props.author}</div>
        )
    }
}

export default BookAuthor