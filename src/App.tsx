import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Equation } from "./models/equation";
import { calculation } from "./const/calculation";
import { CalculationStatus } from "./const/calculationStatus";
import {
  handleAddition,
  handleSubtraction,
  handleMultiplication,
  handleDivination,
  handleEquation,
} from "./handlers/handleCalculations.js";

function App() {
  const [result, setResult] = useState(0);
  const [calFlag, setCalFlag] = useState(0);
  const [equation, setEquation] = useState<Equation>({
    beforeNumber: 0,
    calculation: calculation.ADDITION,
    afterNumber: 0,
  });

  const changeNumberHandler = (number: number) => {
    if (calFlag === CalculationStatus.AFTER)
      setEquation((previous) => ({ ...previous, afterNumber: number }));
    else {
      setEquation((previous) => ({
        ...previous,
        beforeNumber: number,
        afterNumber: 0,
      }));
    }
    setCalFlag(CalculationStatus.BEFORE);
  };

  useEffect(() => {});
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <p>Input value: {result}</p>
          <input
            type="text"
            onChange={(event) =>
              changeNumberHandler(Number(event?.target.value))
            }
          />
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(1);
            }}
          >
            1
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(2);
            }}
          >
            2
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(3);
            }}
          >
            3
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(4);
            }}
          >
            4
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(5);
            }}
          >
            5
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(6);
            }}
          >
            6
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(7);
            }}
          >
            7
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(8);
            }}
          >
            8
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(9);
            }}
          >
            9
          </button>
          <button
            type="button"
            onClick={() => {
              changeNumberHandler(0);
            }}
          >
            0
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              setResult(handleAddition(equation));
              setEquation((previous) => ({
                ...previous,
                calculation: calculation.ADDITION,
                beforeNumber: result,
                afterNumber: 0,
              }));
            }}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              setEquation((previous) => ({
                ...previous,
                calculation: calculation.SUBTRACTION,
              }));
              handleSubtraction(equation);
            }}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              setResult(handleMultiplication(equation));
              setEquation((previous) => ({
                ...previous,
                calculation: calculation.MULTIPLICATION,
                beforeNumber: result,
                afterNumber: 0,
              }));
            }}
          >
            *
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.AFTER);
              setResult(handleDivination(equation));
              setEquation((previous) => ({
                ...previous,
                calculation: calculation.DIVISION,
                beforeNumber: result,
                afterNumber: 0,
              }));
            }}
          >
            /
          </button>
          <button
            type="button"
            onClick={() => {
              setCalFlag(CalculationStatus.BEFORE);
              setResult(handleEquation(equation));
              setEquation((previous) => ({
                ...previous,
                beforeNumber: result,
                afterNumber: 0,
              }));
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
