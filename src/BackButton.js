import React from 'react'

const BackButton = ({changePage}) => {

        
        return(
            <button className="close-search" 
                    onClick={() => changePage(false)}>Close</button>
        )

}

export default BackButton