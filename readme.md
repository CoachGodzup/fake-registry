# Mock Server Prospect

Server per la creazione di anagrafiche prospect casuali, compliant con il Gdpr.

# Caratteristiche

- generazione delle anagrafiche prospect
  - persona fisica o giuridica
  - stato prospect (i.e., lead, cold, warm, dormant).
  - anagrafica base (nome, cognome, indirizzo, provincia di residenza, sesso - non obbligatorio)
  - contatti GDPR (indirizzo, telefono, email)
  - consensi per la Privacy (investimento, ricerca, promozione)
  - ultima modifica - ultimo cambiamento stato
- Genera nomi e cognomi plausibili, sia semplici che multipli o composti, in maniera probabilistica.
- I dati generati sono compatibili con gli stati prospect, il sesso ed il tipo di persona generati

# Installazione

## Requisiti

installare _Node_ v6 o maggiore.

## Procedura

Scaricare le dipendenze

`npm i`

Avviare l'applicazione

`npm start`

Provare la nuova API chiamando la url (via browser o Postman)

`http://localhost:3000/anag/prospect/{idCasuale}`
