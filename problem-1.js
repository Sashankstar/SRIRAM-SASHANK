class Calculator {
  calculate(a, b, operation) {
    switch (operation.toLowerCase()) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return b !== 0 ? a / b : "Cannot divide by zero";
      default:
        return "Invalid operation";
    }
  }
}

// Example Execution
const calc = new Calculator();
console.log(calc.calculate(20, 5, "add"));
console.log(calc.calculate(10, 5, "subtract"));
console.log(calc.calculate(10, 5, "multiply"));
console.log(calc.calculate(10, 5, "divide"));
