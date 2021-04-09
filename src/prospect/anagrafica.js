let publicMethods = {};
const {
  MALE,
  FEMALE,
  FEMALE_NAMES,
  MALE_NAMES,
  PREFIXES,
  SURNAMES,
  PROVINCE,
} = require("../constants");

const {
  randomizeElementFromArray,
  randomizeUnbalancedBoolean,
  randomizeDateFromPast,
  isProspectAcceptedPrivacy,
} = require("./../utils");

const anagrafica = () => {
  const forge = (isFemale, prospectStato) => {
    return {
      nome: getName(isFemale),
      cognome: getSurname(),
      sesso: randomizeUnbalancedBoolean() ? null : isFemale ? FEMALE : MALE, //magari non lo inserisce subito DEVE DIVENTARE UN NUMERO
      provincia: getProvince(),
      dtLastChangeStato: randomizeDateFromPast(),
      dtAggiornamento: isProspectAcceptedPrivacy(prospectStato.id)
        ? randomizeDateFromPast()
        : null,
    };
  };

  const getName = (isFemale) => {
    const AVAILABLE_NAMES = isFemale ? FEMALE_NAMES : MALE_NAMES;
    let output = randomizeUnbalancedBoolean()
      ? getPrefixedName(AVAILABLE_NAMES)
      : randomizeElementFromArray(AVAILABLE_NAMES);
    while (randomizeUnbalancedBoolean()) {
      const newName = randomizeElementFromArray(AVAILABLE_NAMES);
      output += output.indexOf(newName) === -1 ? " " + newName : "";
    }
    output += randomizeUnbalancedBoolean() ? " Maria" : "";
    return output;
  };

  const getPrefixedName = (AVAILABLE_NAMES) => {
    return (
      randomizeElementFromArray(PREFIXES) +
      randomizeElementFromArray(AVAILABLE_NAMES).toLowerCase()
    );
  };

  const getSurname = () => {
    let output = randomizeElementFromArray(SURNAMES);
    while (randomizeUnbalancedBoolean()) {
      const newSurname = randomizeElementFromArray(SURNAMES);
      output += output.indexOf(newSurname) !== -1 ? " " + newSurname : "";
    }
    output += randomizeUnbalancedBoolean() ? " di " + getProvince() : "";
    return output;
  };
  const getProvince = () => {
    return randomizeElementFromArray(PROVINCE);
  };

  publicMethods = {
    forge: forge,
    getName: getName,
    getSurname: getSurname,
    getProvince: getProvince,
  };
};

anagrafica();
module.exports = publicMethods;
