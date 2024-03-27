import React from 'react'

// accept the property as children 
// in container -> define the styling property
function Container({children}) {
    return (
        <div className='
        w-full max-w-7xl mx-auto px-4'> {children} </div>
    )
}

export default Container
