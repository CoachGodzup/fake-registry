module.exports = {
  UNBALANCED_TRESHOLD: 0.85,
  BIAS_TO_ROUND_DATE_NEAR_TODAY: 7 * 10 ** 11,
  // DATE_FORMATTER: new Intl.DateTimeFormat('it-IT', {day: 'numeric', month:'long'}),

  ID_PROSPECT_STATO_PF: [
    { id: 0, nome: "PROS_COLD" }, // prospect cold: ottenuto tramite cross-selling. Non ha dato consensi espliciti alla privacy
    { id: 1, nome: "PROS_WARM" }, // prospect che ha dato consenso attivo. Non un cliente, non ha fatto contratti
  ],
  ID_PROSPECT_STATO_PG: [{ id: 2, nome: "PROS_PERSONA_GIURIDICA" }],

  PERSONA_FISICA_ID: 0,
  PERSONA_GIURIDICA_ID: 1,
  MALE: "M",
  FEMALE: "F",
  PROSPECT_TYPE: [
    { idLabel: 0, codice: "PF", descrizione: "Persona Fisica" },
    { idLabel: 1, codice: "PG", descrizione: "Persona Giuridica" },
  ],

  PREFIXES: ["Pier", "Gian", "Carl", "Paol"],

  MALE_NAMES: [
    "Brambilla",
    "Marco",
    "Paolo",
    "Luca",
    "Ugo",
    "Benigno",
    "Vittorio",
    "Emanuele",
    "Amedeo",
    "Raffaele",
    "Dario",
    "Rambaldo",
    "Piero",
    "Guidobaldo",
    "Giuseppe",
    "Michele",
    "Carmelo",
    "Ferdinando",
    "Francesco",
    "Alfonso",
    "Bernardo",
    "Giordano",
    "Bruno",
    "Mauro",
    "Carlo",
    "Fabrizio",
    "Gabriele",
    "Cesare",
    "Guido",
    "Ivo",
    "Massimiliano",
    "Sergio",
    "Bartolomeo",
    "Giulio",
    "Antonio",
    "Stefano",
    "Leonardo",
    "Raffaello",
    "Filiberto",
    "Maurizio",
    "Glauco",
    "Yuri",
    "Tancredi",
    "Danilo",
    "Alberto",
    "Roberto",
    "Benedetto",
    "Felice",
    "Davide",
    "Gaetano",
    "Alessandro",
    "Rosario",
    "Simone",
    "Jacopo",
    "Domenico",
    "Alberto",
    "Matteo",
    "Marco",
    "Marcello",
    "Daniele",
    "Mattia",
  ],
  FEMALE_NAMES: [
    "Carla",
    "Benedetta",
    "Martina",
    "Agostina",
    "Mariangela",
    "Cristina",
    "Gemma",
    "Angela",
    "Elena",
    "Elisa",
    "Diana",
    "Mafalda",
    "Alice",
    "Carmela",
    "Valentina",
    "Valeria",
    "Margherita",
    "Pia",
    "Beatrice",
    "Lucia",
    "Luisa",
    "Giulia",
    "Concetta",
    "Grazia",
    "Francesca",
    "Fatima",
    "Diletta",
    "Gabriella",
    "Vera",
    "Debora",
    "Rachele",
    "Daniela",
    "Brigida",
    "Alida",
    "Antonietta",
    "Rosa",
    "Ippolita",
    "Ipazia",
    "Letizia",
    "Antonella",
    "Bianca",
    "Dora",
    "Ludovica",
    "Tersilla",
    "Fiammetta",
    "Anita",
    "Asia",
    "Oceania",
    "Assunta",
    "Alessandra",
    "Gea",
    "Mara",
    "Serena",
    "Simona",
    "Stella",
    "Virginia",
    "Lucrezia",
    "Sabrina",
    "Stefania",
    "Roberta",
  ],
  SURNAMES: [
    "Fumagalli",
    "Mascetti",
    "Milano",
    "Lancia",
    "Verde",
    "Bianchi",
    "Capua",
    "Esposito",
    "Carnevale",
    "Manzoni",
    "Della Rovere",
    "Crespi",
    "Romeo",
    "Serbelloni",
    "Mazzanti",
    "Vien Dal Mare",
    "Roma",
    "Calatozzo",
    "Melandri",
    "Visconti",
    "Sforza",
    "Riccardelli",
    "Calboni",
    "Breda",
    "Ferrari",
    "Baracca",
    "La Versa",
    "Custoza",
    "Bardolino",
    "Zingaretti",
    "Chiaretto",
    "Marani",
    "Travaglino",
    "Foppa",
    "Levi",
    "Pascoli",
    "Alfieri",
    "Torre",
    "Guardia",
    "Todeschini",
    "Borbone",
    "Grillo",
    "Cerasuolo",
    "Barbera",
    "Caccia",
    "Guidoni",
    "Disegni",
    "Benso",
    "Cairoli",
    "Pravettoni",
    "Caccamo",
    "Foresta",
    "Mezzatesta",
    "Moretti",
    "Castiglione",
    "Cadorna",
    "Diaz",
    "Badoglio",
    "Borgia",
    "Toti",
    "Salieri",
    "della Gerardesca",
    "Isoardi",
    "Negri",
    "Montessori",
    "Orsetti",
    "Quattrocchi",
    "Farina",
    "Biasion",
    "Limone",
    "Coppi",
    "Bartali",
    "Pantani",
    "Vialli",
    "Trapattoni",
    "Gerini",
    "Gassman",
    "Gherardesca",
    "Agnelli",
    "Strega",
    "Ferrero",
    "Amarelli",
  ],
  PROVINCE: [
    "Milano",
    "Roma",
    "Palermo",
    "Napoli",
    "Verona",
    "Lucca",
    "Perugia",
    "Foggia",
    "Novara",
    "Aosta",
    "Modena",
    "Campobasso",
    "Isernia",
    "Bari",
    "Padova",
    "Pisa",
    "Firenze",
    "Torino",
    "Salerno",
    "Varese",
    "Monza Brianza",
    "Treviso",
    "Massa Carrara",
    "Benevento",
    "Barletta Andria Trani",
    "Avellino",
    "Cremona",
    "Viterbo",
  ],
  EMAIL_PROVIDERS: [
    "gmail.com",
    "live.it",
    "hotmail.it",
    "tiscali.it",
    "libero.it",
    "virgilio.it",
    "yahoo.com",
    "email.it",
    "ginger.eu",
    "coral.com",
    "acme.com",
    "leonardo.it",
    "levissima.eu",
  ],
  ADDRESS_STREET_NAMES: [
    "via",
    "vicolo",
    "piazza",
    "viale",
    "lungolago",
    "lungomare",
  ],
};