const add = function(x, y) {
  if (x + y === undefined) {
    return 0;
  }
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
