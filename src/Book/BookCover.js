import React from 'react'

const BookCover = ({book}) => {
   
        return( 
                <div className="book-cover" style={{ width: 128, height: 193, 
                     backgroundImage: `url(${book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : "https://via.placeholder.com/150"}`
                     }}>
                </div>   
        )
}

export default BookCover

