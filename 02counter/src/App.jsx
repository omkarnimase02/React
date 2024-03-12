import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import library  to access the react
// import { useState } from 'react'

function App() {

  // use HOOK to change the value in the UI
  const [counter,setValue] = useState(15);// set default val
 // counter -> variable & setval -> function to update the value of variable

  

 // increment value by 1

  //let counter = 15;
  const addValue= ()=>{
    //console.log("add value",(Math.random()*10+1));
    
    // console.log("Clicked",(Math.random()*10+1));
    
     //counter = counter +1;

     if(counter >= 20){
      console.log("Counter is not greater than 20");
     }
     else{
      setValue(counter+1);
     }
    
    // setValue(counter*2);
    // console.log("Clicked",counter+1);
  } 

  // decrement by 1
  const decVal =()=>{
    console.log("clicked",counter);
    // counter = counter -1;
    if(counter > 10){
      setValue(counter-1); 
    }
    else{
      console.log("Counter not less than 10");
    }
    
    // setValue(counter/2);  
  }
  return (
   <>
   <h1> Chai aur React </h1>
   <h2> Counter value: {counter}</h2>


{/* // click on button -> incre by 1 */}
   <button 
   onClick={addValue}
   >Add value</button>
   
   <br/>

{/* // click on button -> decre by 1 */}
   <button
   onClick={decVal}>Decrease value </button>
   </>
  )
}

export default App
