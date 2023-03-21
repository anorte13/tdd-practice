const capitlize = require("../scripts/captilize.js");
test("function that takes a string and returns it with the first character capitlized", () => {
  expect(capitlize("hello world")).toBe("Hello world");
});
