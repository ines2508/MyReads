import React from 'react'
import Shelf from './Shelf'
import AddBook from "./AddBook"

const MyReads = ({changePage, moveBook, selectedValue, books, shelfs}) => {


// Make a list (without duplication) of the "server's" shelves on which there are books

        let fullShelf = new Set([]);

        books.map( (element) => (
                                           
            fullShelf.add(element.shelf)                        
        ))
            
        return(
            
// Filter "static" shelves and display only thoses shelves which aren't empty

            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>   
                </div>

                <div className="list-books-content">
                    <div>  
                            {shelfs
                                .filter((shelfItem) => 
                                   (fullShelf.has(shelfItem.value) 
                                    && (shelfItem.value !== 'none')
                                ))
                               
                                .map( (shelfItem) => (

                                    <div key={shelfItem.value} 
                                         className="bookshelf">

                                        <h2 className="bookshelf-title">{shelfItem.shelfName}</h2>
                                        <div className="bookshelf-books">
                                            <Shelf  currentShelf={shelfItem.value ? shelfItem.value : "none"}
                                                    books={books}
                                                    moveBook={moveBook}
                                                    selectedValue={selectedValue}
                                            />
                                        </div>
                                    </div>       
                            ))}
                    </div>
                </div>
                    <AddBook changePage={changePage}/>
            </div>
        )
    
}

export default MyReads
