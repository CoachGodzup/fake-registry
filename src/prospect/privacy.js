let publicMethods = {}
const {randomizeFairBoolean, randomizeUnbalancedBoolean, isProspectAcceptedPrivacy} = require('./../utils')

const privacy = () => {
  const forge = prospectState => {
    const isPrivacySelected = isProspectAcceptedPrivacy(prospectState.id) && randomizeFairBoolean()

    return {
      consent: {
        generic: isPrivacySelected,
        marketing: getUnbalanced(isPrivacySelected),
        marketingThirdPart: getUnbalanced(isPrivacySelected),
        thirdPart: getUnbalanced(isPrivacySelected),
      },
    }
  }

  const getUnbalanced = canHavePrivacy => {
    return canHavePrivacy ? randomizeUnbalancedBoolean() : false
  }

  publicMethods = {
    forge: forge,
  }
}

privacy()
module.exports = publicMethods
