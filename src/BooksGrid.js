import React, {Component} from 'react'
import Book from './BookItem';
import shelfValue from './Shelf';
import BookShelfChanger from './BookShelfChanger'


class BooksGrid extends Component {

    state = {
     //  'position': shelfValue[1].value,
       'position': shelfValue.value,

    }
    newShelf = (shelfValue) => {
        this.setState ((state) => ({
            'position': this.moveBook
        }))
    }
   

    render() {
    //    console.log('Show position ' + this.state.position + " " + this.moveBook)
        console.log('Show shelf ' + this.props.currentShelf)

        return(

            <div className="bookshelf-books">
                <ol className="books-grid">
                    
                    <li><Book id='12' current={this.state.position}/></li>
                    <li><Book current={
                          (this.state.position === this.props.currentShelf) ? this.state.position : 'none'                        
                        }/></li>
                    <li><Book current={this.state.position}/></li>
                </ol>
            </div>
        )
    }
}

export default BooksGrid 