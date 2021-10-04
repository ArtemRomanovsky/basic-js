import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  const letters = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      letters.push(members[i][0]);
    }
  }
  if (letters.length === 0) {
    return false;
  }
  return letters.sort();
}

// console.log(createDreamTeam([12]));