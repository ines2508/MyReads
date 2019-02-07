import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import './App.css'

/* COMPONENTS */

import Search from './Search'
import MyReads from './MyReads'
import shelfValue from './ListShelves';

class BooksApp extends Component {

  state={
    books: [],
    shelfs: shelfValue,
    currentShelf: "",
    selectedValue: ""
  }


// Get all books from the server to check existing shelves

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
  }


  render() {
    return (
        <div className="app">
          <Route exact path='/' render={ () => (
              <MyReads  
                        moveBook={this.moveBook}
                        books={this.state.books}
                        shelfs={this.state.shelfs}
                        selectedValue={this.state.selectedValue}
              />
          )}/>

          <Route path="/search" render={ () => (
              <Search  
                      moveBook={this.moveBook}
                      books={this.state.books}
                      shelfs={this.state.shelfs}
                      selectedValue={this.state.selectedValue}
            />
          )}/>
        </div>      
    )
  }
}

export default BooksApp


