import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("");

  function handleNumberClick(e) {
    const number = e.target.value;
    if (!operator) {
      setFirstNumber(firstNumber * 10 + number);
    } else {
      setSecondNumber(secondNumber * 10 + number);
    }
    setDisplay(display + number);
  }

  function handleOperatorClick(e) {
    setOperator(e.target.value);
    setDisplay(display + e.target.value);
  }

  function handleEqualClick() {
    if (!operator) {
      return;
    }

    switch (operator) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        break;
      case "*":
        setResult(firstNumber * secondNumber);
        break;
      case "/":
        setResult(firstNumber / secondNumber);
        break;
      default:
        break;
    }

    setDisplay(result);
    setFirstNumber(result);
    setSecondNumber(0);
    setOperator("");
  }

  function handleClearClick() {
    setDisplay("");
    setResult(0);
    setFirstNumber(0);
    setSecondNumber(0);
    setOperator("");
  }

  return (
    <div className="calculator">
      <div>
        <input type="text" value={display} disabled />
      </div>
      <div>
        <button value={1} onClick={handleNumberClick}>
          1
        </button>
        <button value={2} onClick={handleNumberClick}>
          2
        </button>
        <button value={3} onClick={handleNumberClick}>
          3
        </button>
        <button value="+" onClick={handleOperatorClick}>
          +
        </button>
      </div>
      <div>
        <button value={4} onClick={handleNumberClick}>
          4
        </button>
        <button value={5} onClick={handleNumberClick}>
          5
        </button>
        <button value={6} onClick={handleNumberClick}>
          6
        </button>
        <button value="-" onClick={handleOperatorClick}>
          -
        </button>
      </div>
      <div>
        <button value={7} onClick={handleNumberClick}>
          7
        </button>
        <button value={8} onClick={handleNumberClick}>
          8
        </button>
        <button value={9} onClick={handleNumberClick}>
          9
        </button>
        <button value="*" onClick={handleOperatorClick}>
          x
        </button>
      </div>
      <div>
        <button value={0} onClick={handleNumberClick}>
          0
        </button>
        <button onClick={handleEqualClick}>=</button>
        <button value="/" onClick={handleOperatorClick}>
          /
        </button>{" "}
        <button onClick={handleClearClick}>AC</button>
      </div>
    </div>
  );
}

export default Calculator;
