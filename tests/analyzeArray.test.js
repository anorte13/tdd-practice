const analyzeArray = require("../scripts/analyzeArray.js");

test("take an array of numbers and return average, min, max and length of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
