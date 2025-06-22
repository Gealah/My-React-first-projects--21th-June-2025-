import { useState } from "react";

export default function Calculator() {
  // State variables
  const [display, setDisplay] = useState("0");
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [formula, setFormula] = useState(""); // <-- NEW

  // Handle digit button click
  function inputDigit(digit) {
    if (display === "0" || waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
      setFormula(formula + (waitingForOperand ? "" : "") + digit);
    } else {
      setDisplay(display + digit);
      setFormula(formula + digit);
    }
  }

  // Handle decimal point
  function inputDot() {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setFormula(formula + ".");
      setWaitingForOperand(false);
    }
  }

  // Reset calculator
  function clearAll() {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setFormula(""); // <-- RESET FORMULA
    setWaitingForOperand(false);
  }

  // Toggle positive/negative
  function toggleSign() {
    if (display !== "0") {
      if (display.charAt(0) === "-") {
        setDisplay(display.slice(1));
        setFormula(formula.slice(0, -display.length) + display.slice(1));
      } else {
        setDisplay("-" + display);
        setFormula(formula.slice(0, -display.length) + "-" + display);
      }
    }
  }

  // Convert to percent
  function inputPercent() {
    const value = String(parseFloat(display) / 100);
    setDisplay(value);
    setFormula(formula.slice(0, -display.length) + value);
  }

  // Perform calculation
  function performOperation(nextOperator) {
    const inputValue = parseFloat(display);

    if (firstOperand == null) {
      setFirstOperand(inputValue);
      setFormula(display + (nextOperator ? nextOperator : ""));
    } else if (operator) {
      const currentValue = firstOperand || 0;
      let newValue = currentValue;

      switch (operator) {
        case "+":
          newValue = currentValue + inputValue;
          break;
        case "-":
          newValue = currentValue - inputValue;
          break;
        case "*":
          newValue = currentValue * inputValue;
          break;
        case "/":
          newValue = inputValue !== 0 ? currentValue / inputValue : "Error";
          break;
        default:
          break;
      }

      setFirstOperand(newValue === "Error" ? 0 : newValue);
      setDisplay(String(newValue));
      setFormula(formula + (nextOperator ? nextOperator : ""));
    } else if (nextOperator) {
      setFormula(formula + nextOperator);
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  }

  // Handle equals button
  function handleEquals() {
    performOperation(null);
    setOperator(null);
    setFirstOperand(null);
    setWaitingForOperand(true);
    setFormula(""); // Optionally clear formula after equals
  }

  // Styles
  const buttonStyle = {
    width: "60px",
    height: "60px",
    margin: "6px",
    fontSize: "1.3rem",
    borderRadius: "12px",
    border: "none",
    background: "#f8ffae",
    boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
    cursor: "pointer"
  };

  const opButtonStyle = {
    ...buttonStyle,
    background: "#43c6ac",
    color: "#fff"
  };

  // Layout: numbers on left, operators on right
  return (
    <div
      style={{
        maxWidth: "340px",
        margin: "60px auto",
        padding: "24px",
        borderRadius: "18px",
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        textAlign: "center"
      }}
    >
      {/* Formula Display */}
      <div
        style={{
          background: "#f0f0f0",
          borderRadius: "8px 8px 0 0",
          minHeight: "24px",
          padding: "4px 12px",
          fontSize: "1rem",
          textAlign: "right",
          color: "#888"
        }}
      >
        {formula}
      </div>
      {/* Main Display */}
      <div
        style={{
          background: "#fff",
          borderRadius: "0 0 10px 10px",
          minHeight: "48px",
          marginBottom: "18px",
          padding: "12px",
          fontSize: "2rem",
          textAlign: "right",
          boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
        }}
      >
        {display}
      </div>

      {/* Main grid */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Number pad */}
        <div>
          <div>
            <button style={buttonStyle} onClick={clearAll}>AC</button>
            <button style={buttonStyle} onClick={toggleSign}>±</button>
            <button style={buttonStyle} onClick={inputPercent}>%</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => inputDigit(7)}>7</button>
            <button style={buttonStyle} onClick={() => inputDigit(8)}>8</button>
            <button style={buttonStyle} onClick={() => inputDigit(9)}>9</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => inputDigit(4)}>4</button>
            <button style={buttonStyle} onClick={() => inputDigit(5)}>5</button>
            <button style={buttonStyle} onClick={() => inputDigit(6)}>6</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => inputDigit(1)}>1</button>
            <button style={buttonStyle} onClick={() => inputDigit(2)}>2</button>
            <button style={buttonStyle} onClick={() => inputDigit(3)}>3</button>
          </div>
          <div>
            <button style={{ ...buttonStyle, width: "128px" }} onClick={() => inputDigit(0)}>0</button>
            <button style={buttonStyle} onClick={inputDot}>.</button>
          </div>
        </div>
        {/* Operator pad */}
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "8px" }}>
          <button style={opButtonStyle} onClick={() => performOperation("/")}>÷</button>
          <button style={opButtonStyle} onClick={() => performOperation("*")}>×</button>
          <button style={opButtonStyle} onClick={() => performOperation("-")}>−</button>
          <button style={opButtonStyle} onClick={() => performOperation("+")}>+</button>
          <button style={opButtonStyle} onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
}