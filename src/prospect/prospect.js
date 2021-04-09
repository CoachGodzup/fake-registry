let publicMethods = {};
const anagrafica = require("./anagrafica");
const privacy = require("./privacy");
const contatti = require("./contatti");
const {
  PROSPECT_TYPE,
  PERSONA_FISICA_ID,
  ID_PROSPECT_STATO_PF,
  PERSONA_GIURIDICA_ID,
  ID_PROSPECT_STATO_PG,
} = require("../constants");
const {
  randomizeFairBoolean,
  randomizeElementFromArray,
} = require("./../utils");

const prospect = () => {
  const forgeNewProspect = (req) => {
    const isFemale = randomizeFairBoolean();
    const type = getProspectType().idLabel;
    const prospectType = getProspectState(type);

    let output = {
      idProspect: req.idProspect,
      ...anagrafica.forge(isFemale, type, prospectType),
      ...privacy.forge(prospectType),
      ...contatti.forge(prospectType),
    };

    console.log(
      "Forged new prospect: " +
        output.idProspect +
        " - " +
        output.nome +
        " " +
        output.cognome
    );
    return output;
  };

  const getProspectType = () => {
    return randomizeElementFromArray(PROSPECT_TYPE);
  };

  const getProspectState = (type) => {
    let prospectStatoArray = [];
    switch (type) {
      case PERSONA_FISICA_ID:
        prospectStatoArray = ID_PROSPECT_STATO_PF;
      case PERSONA_GIURIDICA_ID:
        prospectStatoArray = ID_PROSPECT_STATO_PG;
    }
    return randomizeElementFromArray(prospectStatoArray);
  };

  publicMethods = {
    forgeNewProspect: forgeNewProspect,
  };
};
prospect();
module.exports = publicMethods;
