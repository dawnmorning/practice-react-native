import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useInput } from "./useInput";

function displayMessage(message) {
  alert(message);
}

function App() {
  const { inputValue, handleChange, handleSubmit } = useInput(displayMessage);
  // const [inputValue, setInputValue] = useState("");
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };
  // const handleSubmit = () => {
  //   alert(inputValue);
  //   setInputValue("");
  // };
  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
