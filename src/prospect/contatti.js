let publicMethods = {};

const anagrafica = require("./anagrafica");
const {
  randomizeFairBoolean,
  randomizeUnbalancedBoolean,
  isProspectAcceptedPrivacy,
  randomizeElementFromArray,
  randomizeNumber,
  createNewSyllable,
} = require("./../utils");

const { EMAIL_PROVIDERS, ADDRESS_STREET_NAMES } = require("../constants");

const contatti = () => {
  const forge = (prospectStato) => {
    const idProspectStato = prospectStato.id;
    const isProspectWithGdprContacts = isProspectAcceptedPrivacy(
      idProspectStato
    );
    let hasAddress,
      hasEmail,
      hasPhone = randomizeUnbalancedBoolean();
    if (isProspectWithGdprContacts) {
      hasAddress = randomizeFairBoolean();
      hasEmail = !hasAddress ? true : randomizeFairBoolean();
    } else {
      hasAddress = hasEmail = false;
    }

    const output = {
      indirizzo: hasAddress ? createNewAddress() : null,
      email: hasEmail ? createNewEmail() : null,
      telefono: hasPhone ? createNewPhone() : null,
    };
    console.log(JSON.stringify(idProspectStato) + " " + JSON.stringify(output));
    return output;
  };

  const createNewEmail = () => {
    let output = "";
    const MINIMUM_EMAIL_LENGTH = 4;
    for (let i = 0; i < MINIMUM_EMAIL_LENGTH; i++) {
      output += createNewSyllable();
    }
    while (randomizeUnbalancedBoolean()) {
      output += createNewSyllable();
    }
    output += "@" + randomizeElementFromArray(EMAIL_PROVIDERS);
    return output;
  };

  const createNewAddress = () => {
    let output = randomizeElementFromArray(ADDRESS_STREET_NAMES) + " ";
    // La via puo' essere o una citta', o un nome -  o una data, ma non me la restituisce con il locale giusto;
    if (randomizeFairBoolean()) {
      //citta'
      output += anagrafica.getProvince();
      // } else if(randomizeFairBoolean()) {
    } else {
      output += anagrafica.getName() + " " + anagrafica.getSurname();
      // } else {
      //   const date = randomizeDate();
      //   output += DATE_FORMATTER.format(date);
    }
    return output;
  };

  const createNewPhone = () => {
    return "3" + randomizeNumber(9);
  };

  publicMethods = {
    forge: forge,
  };
};

contatti();
module.exports = publicMethods;
