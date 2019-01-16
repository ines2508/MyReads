import React, {Component} from 'react'
//import * as BooksAPI from './BooksAPI'
//import shelfValue from './Shelf';

import './App.css'

/* COMPONENTS */

import Search from './Search'
import MyReads from './MyReads'


class BooksApp extends Component {

  state={
    showSearchPage: false
  }

  changePage = (value) => {
    this.setState({showSearchPage: value})
  }

  render() {
    return (
        <div className="app">
        {this.state.showSearchPage ?
          <Search  changePage={this.changePage}/> 
          : <MyReads  changePage={this.changePage}/>
        }
        </div>

      
    )
  }
}

export default BooksApp
