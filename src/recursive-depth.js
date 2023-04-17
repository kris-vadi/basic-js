const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let maxDepth = 1;
    
    for(let el of arr) {      
      if (Array.isArray(el)) {
         count += this.calculateDepth(el);
      }
      maxDepth = (count > maxDepth) ? count : maxDepth;
      count = 1;
    }

    return maxDepth;
  }
}


module.exports = {
  DepthCalculator
};
