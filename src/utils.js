const {UNBALANCED_TRESHOLD, BIAS_TO_ROUND_DATE_NEAR_TODAY} = require('./constants')

let publicMethods = {}
const utils = () => {
  /**
   * Choose a random element from an array
   * @param {*} array
   * @returns
   */
  const randomizeElementFromArray = (array = []) => {
    if (array.length === 0) {
      throw new Error('Empty Array given')
    }
    const index = Math.floor((Math.random() * 1000) % array.length)
    return array[index]
  }

  /**
   * "Toss a coin". Generate randomly false or true, 50% each
   * @returns
   */
  const randomizeFairBoolean = () => {
    return parseInt((Math.random() * 10) % 2) === 1
  }

  /**
   * "Toss a loaded coin". Generate randomly false or true, with false more frequently
   * @returns
   */
  const randomizeUnbalancedBoolean = () => {
    return Math.random() > UNBALANCED_TRESHOLD
  }

  /**
   * create a random date from the past
   * @returns
   */
  const randomizeDateFromPast = () => {
    let output = Infinity
    const today = new Date()
    do {
      output = randomizeDate()
    } while (today <= output)
    return output
  }

  /**
   *
   * @returns a random date
   */
  const randomizeDate = () => {
    return new Date(parseInt(Math.random() * 10 ** 12) + BIAS_TO_ROUND_DATE_NEAR_TODAY)
  }

  /**
   * return if prospect has privacy selected
   */
  const isProspectAcceptedPrivacy = () => {
    return !randomizeUnbalancedBoolean()
  }

  const randomizeNumber = numberOfDigits => {
    return parseInt(Math.random() * 10 ** numberOfDigits)
  }

  const createNewSyllable = () => {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y']
    const consonants = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'z',
    ]

    return randomizeElementFromArray(consonants) + randomizeElementFromArray(vowel)
  }

  publicMethods = {
    randomizeElementFromArray: randomizeElementFromArray,
    randomizeFairBoolean: randomizeFairBoolean,
    randomizeUnbalancedBoolean: randomizeUnbalancedBoolean,
    randomizeDateFromPast: randomizeDateFromPast,
    randomizeDate: randomizeDate,
    isProspectAcceptedPrivacy: isProspectAcceptedPrivacy,
    randomizeNumber: randomizeNumber,
    createNewSyllable: createNewSyllable,
  }
}
utils()
module.exports = publicMethods
