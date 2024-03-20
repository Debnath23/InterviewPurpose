import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [mulValue, setMulValue] = useState(1)
  let multipliedValue = value * 5 
  // JavaScript is an interpreted language and when a state will change the entire componet will be rerender. So when we click on the button the value will change through multiplyByFive() function and the App.jsx component rerender and its brings the updated value with it and the multiply the value and show it. 

  const multiplyByFive = () => {
    // setMulValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main value: {value}</h1>
      <button
      onClick={multiplyByFive} 
      >Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue}</h2>
    </>
  )
}

export default App
