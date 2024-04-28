import { calculation } from "../const/calculation";

export function handleAddition(equation) {
  return equation.beforeNumber + equation.afterNumber;
}

export function handleMultiplication(equation) {
  return equation.beforeNumber * equation.afterNumber;
}

export function handleSubtraction(equation) {
  return equation.beforeNumber - equation.afterNumber;
}

export function handleDivination(equation) {
  try {
    return (equation.afterNumber =
      equation.beforeNumber / equation.afterNumber);
  } catch {
    console.log("Cannot divide by 0");
    return 0;
  }
}
export function handleEquation(equation) {
  switch (equation.calculation) {
    case calculation.ADDITION: {
      return handleAddition(equation);
    }
    case calculation.SUBTRACTION: {
      return handleSubtraction(equation);
    }
    case calculation.DIVISION: {
      return handleDivination(equation);
    }
    case calculation.MULTIPLICATION: {
      return handleMultiplication(equation);
    }
    default: {
      //statements;
      return equation.beforeNumber;
    }
  }
}
