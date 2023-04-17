const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  for (let el of domains) {
    let arr = el.split('.').reverse();
    
    for (let i = 0; i < arr.length; i++) {
      let subDomain = '.' + arr.slice(0, i + 1).join('.');
      obj[subDomain] = obj[subDomain] ? obj[subDomain] + 1 : 1;
    }
  }
  return obj;
}

console.log(getDNSStats(['epam.com', 'info.epam.com']));

module.exports = {
  getDNSStats
};
