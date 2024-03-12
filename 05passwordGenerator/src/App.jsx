import { useState,useCallback,useRef,useEffect } from 'react'



function App() {
  const [length,setLength]= useState(8);  // default 8 value of password
  const [numAllowed,setnumAllowed]= useState(false); // in pass add num or not
  const [charAllowed,setcharAllowed]= useState(false);// in pass char is allow or not
  const [password,setPassword]= useState("");


  // useRef hook -> useRef is a React hook used for accessing and manipulating DOM elements directly in functional components. 
  // It returns a mutable ref object whose .current property is initialized with 
  // the passed argument (initial value). 
  // The returned object persists for the full lifetime of the component.
  const passwordRef= useRef(null);

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="~!@#$%^&*{}[]_-+=~"

    // randomly select the string index using loop acc to its length

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)

      pass += str.charAt(char); // add the curr index ele into the pass
    }
    setPassword(pass); // update the state

  },
  [length,numAllowed,charAllowed,setPassword])// useCallback will return a memoized version of the callback that only changes if one of the inputs/ dependencies has changed.

    // copy the password into the clipboard

    const copyPasswordToClipboard= useCallback( () =>{
      passwordRef.current?.select();  // select ui in input
      passwordRef.current?.setSelectionRange(0,999); // select text acc to range
      window.navigator.clipboard.writeText(password);// selct that text in input label

    },[password])// dependency -> after refresh change is there

    // useEffect ->seEffect is a React hook used for performing side effects in functional components. 
    // Side effects include data fetching, subscriptions, or manually changing the DOM. 
    // useEffect takes two arguments: a function containing the side effect logic, and an optional array of dependencies. 
    // The function runs after every render,
    // and the dependencies array specifies when the effect should re-run 
    // (if any of the values in the array change)

    // if page is load then call & if any dependency change then also change

    useEffect(()=>{
      passwordGenerator() 
    },[length,numAllowed,charAllowed,passwordGenerator])
 
    return (
    <div className='w-full max-w-md mx-auto 
    shadow - md rounded-lg px-4 py-3 my-8 bg-gray-800
    text-orange-500'>

      <h1 className='text-white text-center
      my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg
      overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
         />

         <button
         onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-700 text-white
         px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={20}
          value={length}
          className='='cursor-pointer
          onChange={(e) =>{setLength(e.target.value)}}
           />
           <label> Length:{length}</label>
        </div>
        
        {/* // number & char allowed */}
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() =>{
            setnumAllowed((prev) =>!prev);
          }}
          />
          <label htmlFor="numberInput"> Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() =>{
            setnumAllowed((prev) =>!prev);
          }}
          />
          <label htmlFor="charaterInput"> Character</label>
        </div>



      </div>
    </div>
  )
}

export default App
