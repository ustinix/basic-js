const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = Array.from(str);
  let num = 1;
  let result = '';
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) {
     num++;
    } else {
      result += num + arr[i-1];
      num = 1;
    }
  }

  if (arr.length > 0)
   result += num + arr[arr.length-1];

    const regex = new RegExp('1', 'g');
    const replacement = '';
    const newStr = result.replace(regex, replacement);
    return newStr;
}

module.exports = {
  encodeLine
};
