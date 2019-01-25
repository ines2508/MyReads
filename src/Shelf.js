import React from 'react'
import Book from './Book';

const Shelf = ({books, bookId, searchList, searchBookId, currentShelf, value, moveBook, noneShelf}) => {


// Check the position of the book and display book on that shelf
        return(
                <ol className="books-grid">

                    {(searchList ? searchList : books)
                        .filter((book) => (


                          //  (books[books.indexOf(book)]
                          //  ? books[books.indexOf(book)].shelf 
                          //  : book.shelf='none')

                            (!books[books.indexOf(book)]
                            ? book.shelf='none'
                            : books[books.indexOf(book)].shelf )

    
                         //   ( !("shelf" in book) ? book.shelf="none" : book.shelf)
                            ===  (book.shelf === "none" ? (currentShelf = "none") : currentShelf)

                        //    === currentShelf
                        ))
                        
                        // At this point all books from searchList has the same shelf = "none"

                        .map( (unknownBook, index, array) => (

                        // This function was suppose to check if the book from searchList
                        // has already shelf (with the BookAPI.get(id))
                        // and then return this book from BookAPI.get
                        // if there isn't such a book return unknownBook

                     //   unknownBook

                        // 1. solution
                              //  (unknownBook.filter(
                              //   searchBookId(unknownBook.id, unknownBook)
                               //  )) ? bookId : unknownBook
                            

                        // 2. solution 
                             //   bookId ? bookId : 
                             //   unknownBook
                         

                        // 3. solution   

                            //   (books[unknownBook].id) === unknownBook.id ? books[unknownBook] :
                           //    unknownBook

                          
                        // 4. solution
                           
                            //   ((unknownBook) => searchBookId(unknownBook.id)) ?
                            //   (bookId) : unknownBook


                        // 5.solution       

                            //   (books.indexOf(unknownBook)).id === unknownBook.id ?
                            //   books[books.indexOf(myBook)] 
                            //   : unknownBook
    
                        // 6. solution       

                            //   (books.indexOf(unknownBook)) > 0 ?
                            //   books[books.indexOf(unknownBook)] 
                            //   : unknownBook

                        // 7. solution
                        //   (searchList.lenght > 0) ? (bookId) : unknownBook


                        // 8. solution

                      //  (books[books.indexOf(unknownBook)]
                      //  ? books[books.indexOf(unknownBook)] 
                      //  : unknownBook)

                       // 9. solution 

                            unknownBook

                        ))

                        .map((book) => (

                            <li key={book.id} 
                            
                        //   where to put searchBookId ?
                      //  onChange={ event => searchBookId(event, book.id, book)}

                            >
                                <Book book={book}
                                      onChange={searchBookId}
                                    //  searchBookId={searchBookId}
                                    //  bookId={bookId}
                                      value={value} 
                                      moveBook={moveBook}
                                />
                            </li>
                        ))
                    }
                                       
                </ol>
        )    
}




export default Shelf