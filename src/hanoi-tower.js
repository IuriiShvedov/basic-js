const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNumber, turnsSpeed) {
  let quantityTurn = Math.pow(2, diskNumber) - 1;
  let whatTimeForTurn = Math.floor((3600/turnsSpeed) * quantityTurn);


  return {turns: quantityTurn, seconds: whatTimeForTurn }
}

module.exports = {
  calculateHanoi
};
