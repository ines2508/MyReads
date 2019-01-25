import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BackButton from './BackButton'
import SearchInput from './SearchInput'
import Shelf from './Shelf'


class Search extends Component {

    state={
        searchList: [], // +Search
    
        // I want to store here one book from BookAPI.get()
        // and change it after the map in Shelf is runing
        bookId: "", // +Search
        query: "",
        showResult: false,
    }

    searchBookId = (event, id, book) => { // +Search
        BooksAPI.get(id)
        .then((bookId) => {this.setState({bookId})})
        // searchList should also be updated but how? 
        // since it is only one value
        // and something like this.setState() with 
        // searchList[searchList.indexOf(book)].shelf 
        // doesn't work
        .catch(err => (console.log("Didn't find book " + err)))
      }
      
    // Search book
    
      searchBook = (query, empty, list) => { // +Search
        this.setState({query: query.trim()})
    
        console.log(empty)
        BooksAPI.search(query) 
          .then((searchList) => {  
            (searchList.length > 0)
            ? (this.setState({searchList}) && this.setState({showResult: true}))
            : (this.setState({searchList: []}) && this.setState({showResult: false}))
          })
          .then(
            (empty > 0) 
            ? this.setState({showResult: true}) 
            : (this.setState({showResult: false}) && this.setState({searchList: []}))
          )
          .catch( (err) => ( this.setState({showResult: false}) && console.log("There is nothing to show " + err))
          ) 
      }
    
    
    render() {
//= ({searchBook, closeResult, query, bookId, searchBookId, showResult, moveBook, books, searchList, value, shelfs, currentShelf}) => {
        
//    console.log(bookId)

    const currentShelf = this.props.currentShelf;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <BackButton/>
                    <SearchInput searchBook={this.searchBook} 
                                 showResult={this.state.showResult}
                                 searchList={this.state.searchList}
                                 query={this.state.query}
                    />

                </div>

                   <div className="search-books-results">
                   
                    { this.state.showResult ?
                            <div className="search-book-results">
                                <Shelf 
                                    books={this.props.books}
                                    searchList={this.state.searchList}
                                    searchBookId={this.state.searchBookId} 
                                    value={this.props.value}
                                    bookId={this.state.bookId} 
                                    moveBook={this.props.moveBook} 
                                    // Books get default shelf "none"
                                    // currentShelf={this.props.currentShelf}

                                   //  currentShelf={"none"}
                                //     currentShelf={!currentShelf ? currentShelf="none" : currentShelf}

                                />              
                            </div>
                        : ""                              
                    }
                      
                   </div>       
            </div>
        )

   
    }
}

export default Search



 
