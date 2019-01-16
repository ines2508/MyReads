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
    shelfs: shelfValue,
    value: "",
    showSearchPage: false
  }

  changePage = (page) => {
    this.setState({showSearchPage: page})
  }

  // Get all books from the server to check existing shelfs

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState ( {
        books
    }))
  }

// Move book to new shelf

  moveBook = (book, shelf) => {

    BooksAPI.update(book, shelf).then(response => {
        BooksAPI.getAll().then(books => {this.setState({books})})
    })
  }

  render() {
    return (
        <div className="app">
        {this.state.showSearchPage ?
          <Search  changePage={this.changePage}
                    moveBook={this.moveBook}
                    books={this.state.books}
                    shelfs={this.state.shelfs}
                    value={this.state.value}
          /> 
          : <MyReads  changePage={this.changePage} 
                      moveBook={this.moveBook}
                      books={this.state.books}
                      shelfs={this.state.shelfs}
                      value={this.state.value}
            />
        }
        </div>

      
    )
  }
}

export default BooksApp
