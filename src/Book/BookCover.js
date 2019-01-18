import React from 'react'

const BookCover = ({cover}) => {
   
        return( 
                <div className="book-cover" 
                style={{ width: 128, 
                         height: 193, 
                         backgroundImage: `url(${cover})`
                     }}>
                </div>   
        )
}

export default BookCover
