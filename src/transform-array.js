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
  if (!arr instanceof Array) {
    throw Error('Not an array');
  }
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let transformated = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === '--double-prev' && arr[i - 1] !== undefined){transformated.push(arr[i - 1]);break;}
        if(arr[i] === '--discard-prev' && arr[i - 1] !== undefined){transformated.pop();break;}
        if(arr[i] === '--double-next' && arr[i + 1] !== undefined){transformated.push(arr[i + 1]); break;}
        if(arr[i] === '--discard-next' && arr[i + 1] !== undefined){i++; break;}
        else {transformated.push(arr[i]);}
  }
return transformated;
  --double-prev
  --double-next
  --discard-prev
  --discard-next
}

module.exports = {
  transform
};
