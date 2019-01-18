import React from 'react'

const BookShelfChanger = ({book, bookId, searchBookId, shelf, value, moveBook}) => {

        return(
            <div className="book-shelf-changer"
            >
                <select value={

                   // Putting here bookId.shelf doesn't work
                   // value ? bookId.shelf : book.shelf

                    value ? value : book.shelf
                } 
                    onChange={ event => moveBook(book, event.target.value)}
                        
                    // where to put searchBookId ?
                    // onChange={ event => searchBookId(event, book.id, book)}
                    // if I put it here, after click all books from Search change into this one
                >
                    <option value="move" disabled>Move to...</option>

                    {shelf.map( (element) => (

                         <option key={element.value} 
                                 value={element.value}       
                         >
                            {element.shelfName}
                         
                         </option>
                        )      
                    )}
                </select>  
          </div>
        )  
}

export default BookShelfChanger


