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
  let dns = {};
  for (let i = 0; i < domains.length; i++) {
    let dnss = domains[i].split('.').reverse();
    let thisDns = '';
    for (let j = 0; j < dnss.length; j++) {
      thisDns += `.${dnss[j]}`;
      dns[thisDns] = dns[thisDns] + 1 || 1
    }
  }

  return dns;
}

module.exports = {
  getDNSStats
};
