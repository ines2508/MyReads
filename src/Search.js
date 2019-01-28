import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BackButton from './BackButton'
import SearchInput from './SearchInput'
import Shelf from './Shelf'


class Search extends Component {

    state={
        searchList: [],
        query: "",
        showResult: false,
    }

      
// Search book and show the results
    
      searchBook = (query, empty) => {

        this.setState({query: query.trim()})
    
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
                                    moveBook={this.props.moveBook} 
                                    selectedValue={this.props.selectedValue}
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



 
