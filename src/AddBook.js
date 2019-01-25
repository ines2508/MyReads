import React from 'react'

const AddBook = ({changePage}) => {
    
        return(

        <div className="open-search">
            <a href="#search">
                <button onClick={() => changePage(true)}
                >Add a book</button>
            </a>    
        </div>
        )
    
}

export default AddBook