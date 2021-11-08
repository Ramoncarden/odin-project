const palindromes = function(str) {
  let re = /[\W_]/g;
  let strToLower = str.toLowerCase().replace(re, '');
  let reverseStr = strToLower.split('').reverse().join('');

  return strToLower === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
