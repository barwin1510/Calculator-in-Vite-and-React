import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleEquals = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const date = new Date();

  return (
    <>
      <div className="App">
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="display">
            <div>{input}</div>
            <div>{result !== null ? "=" + result : ""}</div>
          </div>
          <div className="buttons">
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("*")}>*</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={handleEquals}>=</button>
            <button onClick={() => handleClick("/")}>/</button>
            <button onClick={handleClear}>C</button>
          </div>
        </div>
      </div>
      <footer>
        Copyright &copy; {date.getFullYear()}; Designed by Barwin Raj
      </footer>
    </>
  );
}

export default App;
