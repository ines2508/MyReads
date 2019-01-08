import React, {Component} from 'react'
import BookCover from './BookTop'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'
import BookAuthor from './BookAuthor'

class Book extends Component {
    render() {
        return(
            <div className='book'>
                <div className="book-top">
                    <BookCover cover='picture'/>             
                    <BookShelfChanger/>
                </div>
                    <BookTitle title='To Kill a Mockingbird'/>
                    <BookAuthor author='Harper Lee'/>
            </div>
        )
    }
}

export default Book

