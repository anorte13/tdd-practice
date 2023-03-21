function capitlize(string) {
  let str = string;
  let str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
}
module.exports = capitlize;
