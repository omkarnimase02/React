import { useState } from 'react'

import Chai from './chai'

function App() {
  // declare variable in function of jsx file

  const  username = "chai aur code"
  
// function return the only one tag so use <>   </>   that tag
  return (   
   
    <>
    <Chai/>
    {/* assing variable using {}  --> in that
    return the final outcome of  js */}
    <h1>Omkar Nimase ||  {username} </h1> 
    <p>Omkar </p>
    </>
 
 
    
  )
}

export default App
