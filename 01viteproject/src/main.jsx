import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyAPP(){
  return (
    <div>
      <h1>Custom App | Omkar</h1>
    </div>
  )
}

// not satisfy the correct syb=ntax which are needed to the render
// const reactElement = {
//   type : 'a',
//   props:{
//       herf: 'https://google.com',
//       target:'_blank'
//   },

//   children: 'Click me to visit google'
// }

// syntax satify the render
// in react is a special syntax is their
const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

// create react ele -> follow the reaCT PROP
// create the variable
const anotherUser ="Omkar Nimase 98"
const ReactElement = React.createElement(
  'a',  // first needed tag
  
  {herf:'https://google.com', target:'_blank'}, // next set attributes for this tag
  'click me to visit google  || ', // message 
  anotherUser   // assing the variable after complete the tree
) 

ReactDOM.createRoot(document.getElementById('root'))
.render(
  
    // <MyAPP/>
    // <reactElement/>
    // anotherElement
    // ReactElement
    // <App/>
    ReactElement
  
)
