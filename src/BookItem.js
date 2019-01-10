import React, {Component} from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'
import BookAuthor from './BookAuthor'
import shelfValue from './Shelf'
import BooksGrid from './BooksGrid'

class Book extends Component {
    state = {
        'position': this.props.bookInfo.shelf
    }

    newShelf = () => {
        this.setState ({
            'position': this.moveBook
        })
    }

    render() {
            let bookD = this.props.bookInfo;

   //     console.log('Book info ' + this.props.current)
    //    console.log (this.props.bookInfo)

        return(
            <div className='book'>
                <div className="book-top">
                    <BookCover cover={bookD.imageLinks.smallThumbnail}/>             
                    <BookShelfChanger showCurrent={this.state.position} shelf={shelfValue}/>
                </div>
                    <BookTitle title={bookD.title}/>
                    <BookAuthor author={bookD.author}/>
            </div>
        )
    }
}

export default Book

