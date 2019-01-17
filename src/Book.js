import React, {Component} from 'react'
import BookCover from './Book/BookCover'
import BookShelfChanger from './Book/BookShelfChanger'
import BookTitle from './Book/BookTitle'
import BookAuthor from './Book/BookAuthor'
import shelfValue from './ListShelfs'
import BooksApp from './App';

class Book extends Component {   

    render() {

        const book = this.props.book;

        return(
            <div className='book'>
                <div className="book-top">
                    <BookCover 
                        cover={"imageLinks" in book ? 
                                book.imageLinks.smallThumbnail :
                                "https://via.placeholder.com/300"}/>             
                    <BookShelfChanger book={book} 
                                      value={this.props.value} 
                                      moveBook={this.props.moveBook} 
                                      shelf={shelfValue} />
                </div>
                    <BookTitle title={book.title ? book.title : "Unknown"}/>
                    <BookAuthor author={book.authors ? book.authors : ["Unknown"]}/>
            </div>
        )
    }      
}

export default Book

                     


