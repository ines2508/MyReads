import React, {Component} from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'

/* COMPONENTS */

import MyReads from './MyReads'


class BooksApp extends Component {

  render() {
    return (
        <div className="app">
          <MyReads/>
        </div>

      
    )
  }
}

export default BooksApp
