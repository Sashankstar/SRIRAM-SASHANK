function generateOddNumbers(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example Execution
console.log(generateOddNumbers(4)); // Output : [1, 3, 5, 7]
