let publicMethods = {}

const registry = require('./registry')
const {
  randomizeFairBoolean,
  randomizeUnbalancedBoolean,
  isProspectAcceptedPrivacy,
  randomizeElementFromArray,
  randomizeNumber,
  createNewSyllable,
} = require('../utils')

const {EMAIL_PROVIDERS, ADDRESS_STREET_NAMES} = require('../constants')

const contacts = () => {
  const forge = prospectState => {
    const idProspectState = prospectState.id
    const isProspectWithGdprContacts = isProspectAcceptedPrivacy(idProspectState)
    let hasAddress,
      hasEmail,
      hasPhone = randomizeUnbalancedBoolean()
    if (isProspectWithGdprContacts) {
      hasAddress = randomizeFairBoolean()
      hasEmail = !hasAddress ? true : randomizeFairBoolean()
    } else {
      hasAddress = hasEmail = false
    }

    const output = {
      address: hasAddress ? createNewAddress() : null,
      email: hasEmail ? createNewEmail() : null,
      phone: hasPhone ? createNewPhone() : null,
    }
    console.log(JSON.stringify(idProspectState) + ' ' + JSON.stringify(output))
    return output
  }

  const createNewEmail = () => {
    let output = ''
    const MINIMUM_EMAIL_LENGTH = 4
    for (let i = 0; i < MINIMUM_EMAIL_LENGTH; i++) {
      output += createNewSyllable()
    }
    while (randomizeUnbalancedBoolean()) {
      output += createNewSyllable()
    }
    output += '@' + randomizeElementFromArray(EMAIL_PROVIDERS)
    return output
  }

  const createNewAddress = town => {
    let streetName = randomizeFairBoolean() ? registry.getProvince() : `${registry.getName()} ${registry.getSurname()}`
    let buildingNumber = randomizeNumber(10) % 50
    return `${randomizeElementFromArray(ADDRESS_STREET_NAMES)} ${streetName} ${buildingNumber} - ${town}`
  }

  const createNewPhone = () => {
    return '3' + randomizeNumber(9)
  }

  publicMethods = {
    forge: forge,
  }
}

contacts()
module.exports = publicMethods
