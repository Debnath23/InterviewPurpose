import { useState } from "react";
import "./App.css";

function App() {
  console.log("App rendered:", Math.random());
  const [value, setValue] = useState({ value: 0 });

  const clickMe = () => {
    setValue({ value: 0 });
  };
  // In Javascript for premetive datatypes we use call by value as string, number, boolean but non-premetive datatypes (array, function, object) are used as call by reference, so whenever we call it gives a new value and so getting the new value React App.jsx component will be rerendered.

  return (
    <>
      <h1>Main value: {value.value}</h1>
      <button onClick={clickMe}>Click</button>
      {/* <h2>Multiplied value: {multipliedValue}</h2> */}
    </>
  );
}

export default App;
