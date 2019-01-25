import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

import './App.css'

/* COMPONENTS */

import Search from './Search'
import MyReads from './MyReads'
import shelfValue from './ListShelfs';

class BooksApp extends Component {

  state={
    books: [],
    searchList: [],

    // I want to store here one book from BookAPI.get()
    // and change it after the map in Shelf is runing
    bookId: "",

    shelfs: shelfValue,
    currentShelf: "",
    value: "",
    showSearchPage: false,
    showResult: false,
    query: ""
  }

// Change page

  changePage = (page) => {
    this.setState({showSearchPage: page})
  }

// Get all books from the server to check existing shelfs

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => this.setState ({books}))
    .catch( (err) => ( console.log("Didn't get all books " + err)))
  }

  // Move book to new shelf

  moveBook = (book, newShelf) => {
   
    BooksAPI.update(book, newShelf)
        .then(response => {
          BooksAPI.getAll()
          .then((books) => {this.setState({books})})
        })
        .catch( (err) => (
          console.log("Was unable to move the book " + err)
        ))

  console.log(`New shelf ${newShelf} + old shelf ${book.newShelf} + ${book.id}`)    
  }

// Return book from id 
// Don't know where to put it or it should be something like componentDidMount

  searchBookId = (event, id, book) => {
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

  searchBook = (query, empty, list) => {
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
    return (
        <div className="app">
        {this.state.showSearchPage ?
          <Search   changePage={this.changePage}
                    searchBook={this.searchBook}
                    searchBookId={this.searchBookId}
                    moveBook={this.moveBook}
                    showResult={this.state.showResult}
                    books={this.state.books}
                    searchList={this.state.searchList}
                    shelfs={this.state.shelfs}
                    value={this.state.value}
                    bookId={this.state.bookId}
                    currentShelf={this.state.currentShelf}
                    query={this.state.query}
                    closeResult={this.closeResult}
          /> 
          : <MyReads  changePage={this.changePage} 
                      moveBook={this.moveBook}
                      books={this.state.books}
                      shelfs={this.state.shelfs}
                      value={this.state.value}
                      searchBookId={this.searchBookId}
                      searchList={this.state.searchList}
            />
        }
        </div>      
    )
  }
}

export default BooksApp

// Other questions
// ListShelfs.js has list of shelfs, those are raw data, how to store it?
// in a React Function ?
// json?

// Other TODO:
// - more error checking for input
// - React Router
// - better picture for placeholder
