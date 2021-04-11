let publicMethods = {};
const registry = require("./registry");
const privacy = require("./privacy");
const contacts = require("./contacts");
const {
  PROSPECT_TYPE,
  PHYSICAL_PERSON_ID,
  ID_PROSPECT_STATE_PP,
  COMPANY_ID,
  ID_PROSPECT_STATE_COMPANY,
} = require("../constants");
const {
  randomizeFairBoolean,
  randomizeElementFromArray,
} = require("./../utils");

const prospect = () => {
  const forgeNewProspect = () => {
    const isFemale = randomizeFairBoolean();
    const type = getProspectType().idLabel;
    const prospectType = getProspectState(type);

    let output = {
      idProspect: prospectType,
      ...registry.forge(isFemale, type, prospectType),
      ...privacy.forge(prospectType),
      ...contacts.forge(prospectType),
    };

    console.log(
      "Forged new prospect: " +
        output.idProspect.name +
        " - " +
        output.name +
        " " +
        output.surname
    );
    return output;
  };

  const getProspectType = () => {
    return randomizeElementFromArray(PROSPECT_TYPE);
  };

  const getProspectState = (type) => {
    switch (type) {
      case PHYSICAL_PERSON_ID:
        return randomizeElementFromArray(ID_PROSPECT_STATE_PP);
      case COMPANY_ID:
        return randomizeElementFromArray(ID_PROSPECT_STATE_COMPANY);
    }
  };

  publicMethods = {
    forgeNewProspect: forgeNewProspect,
  };
};
prospect();
module.exports = publicMethods;
