const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
let month = date.getMonth();
let season;
if (month >= 0 && month <= 1 || month == 11) season = "winter";
if (month >= 2 && month <= 4) season = "spring";
if (month >= 5 && month <= 7) season = "summer";
if (month >= 8 && month <= 10) season = "autumn";
return season;
}

module.exports = {
  getSeason
};
