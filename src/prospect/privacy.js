let publicMethods = {};
const {
  randomizeFairBoolean,
  randomizeUnbalancedBoolean,
  isProspectAcceptedPrivacy,
} = require("./../utils");

const privacy = () => {
  const forge = (prospectStato) => {
    const isPrivacySelected =
      isProspectAcceptedPrivacy(prospectStato.id) && randomizeFairBoolean();

    return {
      consensoGenerico: isPrivacySelected,
      consensoRicerca: getUnbalanced(isPrivacySelected),
      consensoPromozione: getUnbalanced(isPrivacySelected),
      consensoMarketing: getUnbalanced(isPrivacySelected),
      consensoMarketingTerzi: getUnbalanced(isPrivacySelected),
    };
  };

  const getUnbalanced = (canHavePrivacy) => {
    return canHavePrivacy ? randomizeUnbalancedBoolean() : false;
  };

  publicMethods = {
    forge: forge,
  };
};

privacy();
module.exports = publicMethods;
