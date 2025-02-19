const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  let transformArr = [];
  for(let i = 0; i < arr.length; i++) {
    
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 1]) i++;
        break;

      case '--discard-prev':
        if (arr[i - 1] && arr[i - 2] != '--discard-next') transformArr.pop(arr[i]);
        break;

      case '--double-next':
        if (arr[i + 1]) transformArr.push(arr[i + 1]);
        break;

      case '--double-prev':
        if (arr[i - 1] && arr[i - 2] != '--discard-next') transformArr.push(arr[i - 1]);
        break;

      default:
        transformArr.push(arr[i]);
    }
  }

  return transformArr;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));

module.exports = {
  transform
};
