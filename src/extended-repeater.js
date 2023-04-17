const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  (!options.separator) ? options.separator = '+' : options.separator = String(options.separator);

  (!options.additionSeparator) ? options.additionSeparator = '|' : options.additionSeparator = String(options.additionSeparator);

  (options.addition === undefined) ? options.addition = '' : options.addition = String(options.addition);

  if (!options.repeatTimes) options.repeatTimes = 1;

  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

  let additionStr = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  
  return (str + additionStr + options.separator).repeat(options.repeatTimes - 1) + str + additionStr;
}

module.exports = {
  repeater
};
