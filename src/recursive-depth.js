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
    let count = 0;
    let repeats = 0;
    if (Array.isArray(arr)) {
      count = 1;
      for(let el of arr) {      
        if (Array.isArray(el)) {
          count += this.calculateDepth(el);
          repeats++;
          console.log(`el: ${el}, count: ${count}, maxDeep: ${repeats}`);
        }
      }
    }
    
    return (repeats > 0 ) ? count - (repeats-1) : count;
  }
}
const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));

module.exports = {
  DepthCalculator
};
