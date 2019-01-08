import React, {Component} from 'react'
import BookCover from './BookTop'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'
import BookAuthor from './BookAuthor'

class Book extends Component {
    render() {
        return(
            <div className='book'>
                    <BookCover className='book-top'></BookCover>             
                    <BookShelfChanger className="book-shelf-changer"></BookShelfChanger>
                    <BookTitle></BookTitle>
                    <BookAuthor></BookAuthor>
            </div>
        )
    }
}

export default Book

