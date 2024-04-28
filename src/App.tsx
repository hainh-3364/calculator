import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Equation } from "./models/equation";
import { calculation } from "./const/calculation";
import { CalculationStatus } from "./const/calculationStatus";
import { handleEquation } from "./handlers/handleCalculations.js";

function App() {
  const [numberInput, setNumberInput] = useState<string>("0");
  const [result, setResult] = useState(0);
  const [calFlag, setCalFlag] = useState(0);
  const [equation, setEquation] = useState<Equation>({
    beforeNumber: 0,
    calculation: calculation.ADDITION,
    afterNumber: 0,
  });

  const changeNumberInput = (number: number) => {
    setNumberInput((prev) => {
      if (prev !== "0") {
        return prev.concat(number.toString());
      } else {
        return number.toString();
      }
    });
  };
  const changeNumberHandler = () => {
    if (calFlag === CalculationStatus.AFTER) {
      equation.afterNumber = Number(numberInput);
      setNumberInput("0");
    } else {
      equation.beforeNumber = Number(numberInput);
      setNumberInput("0");
    }
  };

  const numberButtons = [];

  for (let i = 0; i < 10; i++) {
    numberButtons.push(
      <button
        key={i}
        type="button"
        onClick={() => {
          changeNumberInput(i);
        }}
      >
        {i}
      </button>
    );
  }

  useEffect(() => {
    setResult(Number(numberInput));
  }, [equation.calculation, equation.afterNumber, equation.beforeNumber]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <p>Input value: {result}</p>
          <input
            type="text"
            onChange={(event) => changeNumberInput(Number(event?.target.value))}
          />
          <div>{numberButtons}</div>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              changeNumberHandler();
              equation.beforeNumber = handleEquation(equation);
              equation.calculation = calculation.ADDITION;
              console.log(equation);
            }}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              changeNumberHandler();
              equation.beforeNumber = handleEquation(equation);
              equation.calculation = calculation.SUBTRACTION;
            }}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              changeNumberHandler();
              equation.beforeNumber = handleEquation(equation);
              equation.calculation = calculation.MULTIPLICATION;
            }}
          >
            *
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              changeNumberHandler();
              equation.beforeNumber = handleEquation(equation);
              equation.calculation = calculation.DIVISION;
            }}
          >
            /
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler();
              equation.beforeNumber = handleEquation(equation);
              equation.afterNumber = 0;
              equation.calculation = calculation.NONE;
              setResult(equation.beforeNumber);
            }}
          >
            =
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
