import React, {Component} from 'react'
import BookCover from './BookTop'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'
import BookAuthor from './BookAuthor'
import shelfValue from './Shelf'
import BookGrid from './BooksGrid'

class Book extends Component {
    render() {
        console.log('Book info ' + this.props.current)

        return(
            <div className='book'>
                <div className="book-top">
                    <BookCover cover='picture'/>             
                    <BookShelfChanger showCurrent={this.props.current} shelf={shelfValue}/>
                </div>
                    <BookTitle title='To Kill a Mockingbird'/>
                    <BookAuthor author='Harper Lee'/>
            </div>
        )
    }
}

export default Book

