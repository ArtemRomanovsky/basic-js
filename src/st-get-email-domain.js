import { NotImplementedError } from '../extensions/index.js';

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
export default function getEmailDomain(email) {
  let letters = [];
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      let iSearch = i;
      for (let i = iSearch; i < email.length - 1; i++) {
        letters.push(email[i]);
      }
    }
  }
  return letters.join();
}
