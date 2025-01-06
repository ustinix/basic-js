const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let separator = '@';
  let domen = email.slice(email.lastIndexOf(separator) + separator.length);
  return domen;
}

module.exports = {
  getEmailDomain
};
