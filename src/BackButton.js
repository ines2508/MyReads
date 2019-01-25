import React from 'react'

const BackButton = ({changePage}) => {

        
        return(
                <a href="#main"><button className="close-search" 
                    onClick={() => changePage(false)}>Close</button></a>
        )

}

export default BackButton