module.exports = {
  UNBALANCED_TRESHOLD: 0.85,
  BIAS_TO_ROUND_DATE_NEAR_TODAY: 7 * 10 ** 11,

  // GDPR is only valid for Phisical Persons, not for Companies
  ID_PROSPECT_STATE_PP: [
    {id: 0, name: 'COLD'}, // cold prospect: gained via cross-selling. No explicit consent given
    {id: 1, name: 'WARM'}, // warm prospect: who gave explicit consent.
  ],
  ID_PROSPECT_STATE_COMPANY: [{id: 2, name: 'COMPANY'}],

  PHYSICAL_PERSON_ID: 0,
  COMPANY_ID: 1,
  MALE: 'M',
  FEMALE: 'F',
  PROSPECT_TYPE: [
    {idLabel: 0, code: 'PP', description: 'Phisical Person'},
    {
      idLabel: 1,
      code: 'CO',
      description: 'Company',
    },
  ],

  PREFIXES: ['Pier', 'Gian', 'Carl', 'Paol'],

  MALE_NAMES: [
    'Brambilla',
    'Marco',
    'Paolo',
    'Luca',
    'Ugo',
    'Benigno',
    'Vittorio',
    'Emanuele',
    'Amedeo',
    'Raffaele',
    'Dario',
    'Rambaldo',
    'Piero',
    'Guidobaldo',
    'Giuseppe',
    'Michele',
    'Carmelo',
    'Ferdinando',
    'Francesco',
    'Alfonso',
    'Bernardo',
    'Giordano',
    'Bruno',
    'Mauro',
    'Carlo',
    'Fabrizio',
    'Gabriele',
    'Cesare',
    'Guido',
    'Ivo',
    'Massimiliano',
    'Sergio',
    'Bartolomeo',
    'Giulio',
    'Antonio',
    'Stefano',
    'Leonardo',
    'Raffaello',
    'Filiberto',
    'Maurizio',
    'Glauco',
    'Yuri',
    'Tancredi',
    'Danilo',
    'Alberto',
    'Roberto',
    'Benedetto',
    'Felice',
    'Davide',
    'Gaetano',
    'Alessandro',
    'Rosario',
    'Simone',
    'Jacopo',
    'Domenico',
    'Alberto',
    'Matteo',
    'Marco',
    'Marcello',
    'Daniele',
    'Mattia',
  ],
  FEMALE_NAMES: [
    'Carla',
    'Benedetta',
    'Martina',
    'Agostina',
    'Mariangela',
    'Cristina',
    'Gemma',
    'Angela',
    'Elena',
    'Elisa',
    'Diana',
    'Mafalda',
    'Alice',
    'Carmela',
    'Valentina',
    'Valeria',
    'Margherita',
    'Pia',
    'Beatrice',
    'Lucia',
    'Luisa',
    'Giulia',
    'Concetta',
    'Grazia',
    'Francesca',
    'Fatima',
    'Diletta',
    'Gabriella',
    'Vera',
    'Debora',
    'Rachele',
    'Daniela',
    'Brigida',
    'Alida',
    'Antonietta',
    'Rosa',
    'Ippolita',
    'Ipazia',
    'Letizia',
    'Antonella',
    'Bianca',
    'Dora',
    'Ludovica',
    'Tersilla',
    'Fiammetta',
    'Anita',
    'Asia',
    'Oceania',
    'Assunta',
    'Alessandra',
    'Gea',
    'Mara',
    'Serena',
    'Simona',
    'Stella',
    'Virginia',
    'Lucrezia',
    'Sabrina',
    'Stefania',
    'Roberta',
  ],
  SURNAMES: [
    'Fumagalli',
    'Mascetti',
    'Milano',
    'Lancia',
    'Verde',
    'Bianchi',
    'Capua',
    'Esposito',
    'Carnevale',
    'Manzoni',
    'Della Rovere',
    'Crespi',
    'Romeo',
    'Serbelloni',
    'Mazzanti',
    'Vien Dal Mare',
    'Roma',
    'Calatozzo',
    'Melandri',
    'Visconti',
    'Sforza',
    'Riccardelli',
    'Calboni',
    'Breda',
    'Ferrari',
    'Baracca',
    'La Versa',
    'Custoza',
    'Bardolino',
    'Zingaretti',
    'Chiaretto',
    'Marani',
    'Travaglino',
    'Foppa',
    'Levi',
    'Pascoli',
    'Alfieri',
    'Torre',
    'Guardia',
    'Todeschini',
    'Borbone',
    'Grillo',
    'Cerasuolo',
    'Barbera',
    'Caccia',
    'Guidoni',
    'Disegni',
    'Benso',
    'Cairoli',
    'Pravettoni',
    'Caccamo',
    'Foresta',
    'Mezzatesta',
    'Moretti',
    'Castiglione',
    'Cadorna',
    'Diaz',
    'Badoglio',
    'Borgia',
    'Toti',
    'Salieri',
    'della Gerardesca',
    'Isoardi',
    'Negri',
    'Montessori',
    'Orsetti',
    'Quattrocchi',
    'Farina',
    'Biasion',
    'Limone',
    'Coppi',
    'Bartali',
    'Pantani',
    'Vialli',
    'Trapattoni',
    'Gerini',
    'Gassman',
    'Gherardesca',
    'Agnelli',
    'Strega',
    'Ferrero',
    'Amarelli',
  ],
  PROVINCE: [
    'Milano',
    'Roma',
    'Palermo',
    'Napoli',
    'Verona',
    'Lucca',
    'Perugia',
    'Foggia',
    'Novara',
    'Aosta',
    'Modena',
    'Campobasso',
    'Isernia',
    'Bari',
    'Padova',
    'Pisa',
    'Firenze',
    'Torino',
    'Salerno',
    'Varese',
    'Monza Brianza',
    'Treviso',
    'Massa Carrara',
    'Benevento',
    'Barletta Andria Trani',
    'Avellino',
    'Cremona',
    'Viterbo',
  ],
  EMAIL_PROVIDERS: [
    'gmail.com',
    'live.it',
    'hotmail.it',
    'tiscali.it',
    'libero.it',
    'virgilio.it',
    'yahoo.com',
    'email.it',
    'ginger.eu',
    'coral.com',
    'acme.com',
    'leonardo.it',
    'levissima.eu',
  ],
  ADDRESS_STREET_NAMES: ['via', 'vicolo', 'piazza', 'viale', 'lungolago', 'lungomare'],
}
