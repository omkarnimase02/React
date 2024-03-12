import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name:"Omkar",
    age:21
  }
  let myArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <br /> */}
      {/* <h1 className='bg-orange-400 text-white p-7 text-size-18'>Omkar Nimase</h1> */}

    {/* // pass the value of the function which is in props */}
      {/* <Card channel="omkar Nimase" someObj ={myObj} someArr ={myArr}/>  */}
      <Card userName="Omkar" btnText="Click Me"/>

      <Card userName="PPP"/>
    
    </>
  )
}

export default App
