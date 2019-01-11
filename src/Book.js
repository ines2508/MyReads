import React, {Component} from 'react'
import BookCover from './Book/BookCover'
import BookShelfChanger from './Book/BookShelfChanger'
import BookTitle from './Book/BookTitle'
import BookAuthor from './Book/BookAuthor'
import shelfValue from './ListShelfs'

class Book extends Component {   

    render() {

        const book = this.props.book;

        return(
            <div className='book'>
                <div className="book-top">
                    <BookCover cover={book.imageLinks.smallThumbnail}/>             
                    <BookShelfChanger book={book} value={this.props.value} moveBook={this.props.moveBook} shelf={shelfValue} />
                </div>
                    <BookTitle title={book.title}/>
                    <BookAuthor author={book.authors}/>
            </div>
        )
    }      
}

export default Book

