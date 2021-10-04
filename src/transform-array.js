import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  let tmpArr = Array.from(arr);
  for (let i = 0; i < arr.length; i++) {
    if (tmpArr[i] === '--double-next') {
      tmpArr[i] = tmpArr[i + 1];
    }
    if (tmpArr[i] === '--double-prev') {
      tmpArr[i] = tmpArr[i - 1];
    }
    if (tmpArr[i] === '--discard-next') {
      tmpArr.splice(i + 1, 1);
    }
    if (tmpArr[i] === '--discard-prev') {
      tmpArr.splice(i - 1, 1);
    }
  }
  return tmpArr;
}
