const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const K = 0.693 / HALF_LIFE_PERIOD;
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || isNaN(sampleActivity) === true )
  {
    return false
  }
 return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/K);
}

module.exports = {
  dateSample
};

// 2)формула выглядит так: t(его надо найти) = ln(MODERN_ACTIVITY/A)*HALF_LIFE_PERIOD)/ln(2);
// return (Math.log((MODERN_ACTIVITY / sampleActivity)*HALF_LIFE_PERIOD))/ Math.log(2);