const analyzeArray = (arr) => {
  const avg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
  };
  const m = (arr) => {
    return Math.min(...arr);
  };
  const x = (arr) => {
    return Math.max(...arr);
  };
  const l = (arr) => {
    return arr.length;
  };
  let obj = {
    average: avg(arr),
    min: m(arr),
    max: x(arr),
    length: l(arr),
  };
  return obj;
};
module.exports = analyzeArray;
