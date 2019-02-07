import React from 'react'

const BookAuthor =({author}) => {
  
        return(
            <div className="book-authors">

                 {author.map((author) => 
                    <span key={author}>{author ? author : "Unknown"}<br/>
                    </span> 
                 )}
                 
            </div>
        )   
}

export default BookAuthor
