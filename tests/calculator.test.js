const calculator = require("../scripts/calculator.js");

test("Add two numbers (1 and 2) and return their value (3).", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("Subtract two numbers (3 and 1) and return (2).", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});
test("Multiply two numbers (3 and 3) and return (9).", () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});
test("Divide two numbers (6 and 3) and return (2).", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});
