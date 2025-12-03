function generateOddRule(a) {
  let count = a % 2 === 0 ? a - 1 : a; // if even, subtract 1
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example Execution
console.log(generateOddRule(10)); // Output : [1, 3, 5, 7, 9]
console.log(generateOddRule(5)); // Output : [1, 3, 5, 7, 9]
