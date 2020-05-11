const sum = (arr) => {
  return arr.filter((item) => item > 0).reduce((a, b) => a + b, 0);
};

console.log(sum([1, -4, 7, 12]));
console.log(sum([1, -2, 3, -4, 5, 6]));
