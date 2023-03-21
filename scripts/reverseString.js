function reverseString(string) {
  let str = string;
  let str2 = "";
  let i = str.length;
  for (i; i >= 0; i--) {
    let char = str.charAt(i);
    str2 += char;
  }
  return str2;
}
module.exports = reverseString;
