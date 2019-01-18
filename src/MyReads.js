import React from 'react'
import Shelf from './Shelf'
import AddBook from "./AddBook"

const MyReads = ({changePage, moveBook, searchList, searchBookId, books, shelfs, value}) => {


// Make a list (without duplication) of the "server's" shelfs on which there are books

        let fullShelf = new Set([]);

        books.map( (element) => (
                                           
            fullShelf.add(element.shelf)                        
        ))

            
        return(
            
// Filter "static" shelfs and display only thoses shelfs which aren't empty

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
                                                    value={value}
                                                    moveBook={moveBook}
                                                    searchBookId={searchBookId}
                                                  //  searchList={searchList}
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
