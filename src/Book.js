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
            <div className='book'

            >
                <div className="book-top">
                    <BookCover 
                        cover={"imageLinks" in book ? 
                                book.imageLinks.smallThumbnail :
                                "https://via.placeholder.com/300"}/>             
                    <BookShelfChanger book={book}
                                      moveBook={this.props.moveBook} 
                                      shelf={shelfValue}
                                      selectedValue={this.props.selectedValue}
                                      shelfValue={this.props.shelfValue}
                    />
                </div>
                    <BookTitle title={"title" in book ? book.title : "Unknown"}/>
                    <BookAuthor author={"authors" in book ? book.authors : ["Unknown"]}/>
            </div>
        )
    }      
}

export default Book

                     


