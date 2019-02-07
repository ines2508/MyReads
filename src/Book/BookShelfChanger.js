import React from 'react'

const BookShelfChanger = ({book, selectedValue, shelfValue, shelf, moveBook}) => {

        return(
            <div className="book-shelf-changer"
            >
                <select 
                
                    value={
                        selectedValue ?  selectedValue : shelfValue 
                    }
                    name = {selectedValue} 
                    
                    onChange={ event => (moveBook(book, event.target.value))
                    }
                        
                >
                    <option value="move" disabled>Move to...</option>

                    {shelf.map( (element) => (

                        <option key={element.value} 
                                value={element.value}
                                label={element.label}       
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


