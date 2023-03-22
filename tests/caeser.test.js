const caesarCipher = require("../scripts/caesarCipher.js");

test("Take a string and shift letters based on given key.", () => {
  expect(caesarCipher("Hello World", 1)).toBe("ifmmp xpsme");
});
test("Take a string and shift letters based on given key.", () => {
  expect(caesarCipher("Hello World", 25)).toBe("gdkkn vnqkc");
});
