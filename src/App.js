import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import './App.css'

/* COMPONENTS */

import Search from './Search'
import MyReads from './MyReads'
import shelfValue from './ListShelfs';

class BooksApp extends Component {

  state={
    books: [],
    shelfs: shelfValue,
  //  currentShelf: "",
    value: "",
  }

// Get all books from the server to check existing shelfs

  componentDidMount() { // +App
    BooksAPI.getAll()
    .then((books) => this.setState ({books}))
    .catch( (err) => ( console.log("Didn't get all books " + err)))
  }

  // Move book to new shelf

  moveBook = (book, newShelf) => { // +App
   
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


  render() {
    return (
        <div className="app">
         <Route exact path='/' render={ () => (
          <MyReads  
                    moveBook={this.moveBook}
                    books={this.state.books}
                    shelfs={this.state.shelfs}
                    value={this.state.value}
                  //  currentShelf={this.state.currentShelf}
          />
        )}/>

        <Route path="/search" render={ () => (
          <Search  
                   moveBook={this.moveBook}
                   books={this.state.books}
                   shelfs={this.state.shelfs}
                   value={this.state.value}
                //   currentShelf={this.state.currentShelf}
         />
        )}/>
   
       
 
        
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
// - better picture for placeholder
