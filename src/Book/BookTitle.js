import React from 'react'

const BookTitle = ({title}) => {
  
        return(
            <div className="book-title">{title ? title : "Unknown"}</div>
        )

}

export default BookTitle