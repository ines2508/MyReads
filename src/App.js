import React, {Component} from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'

/* COMPONENTS */

import Book from './BookItem'

class BooksApp extends Component {

  render() {
    return (
        <div>
          <Book></Book>
        </div>

      
    )
  }
}

export default BooksApp
