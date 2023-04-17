const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numDigits = [];
  while (n) {
    numDigits.unshift(n % 10);
    n = Math.floor(n / 10);
  }

  let maxNumber = 0;
  for(let i = 0; i < numDigits.length; i++) {
    let number = numDigits.slice();
    number.splice(i, 1);
    maxNumber = Math.max(Number(number.join('')), maxNumber);
  }

  return maxNumber;  
}

module.exports = {
  deleteDigit
};
