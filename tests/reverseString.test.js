const reverseString = require("../scripts/reverseString.js");

test("function that takes a string and returns it reversed.", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});
