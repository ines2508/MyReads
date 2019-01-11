import React from 'react'

const BookShelfChanger = ({book, shelf, value, moveBook}) => {

        return(
            <div className="book-shelf-changer">
                <select value={value ? value : book.shelf} 
                        onChange={ event => moveBook(book, event.target.value)}
                >
                    <option value="move" disabled>Move to...</option>

                    {shelf.map( (element) => (

                    <option key={element.value} 
                            value={element.value}       
                    >{element.shelfName}</option>
                        )      
                    )}
                </select>  
          </div>
        )  
}

export default BookShelfChanger


