# Fake Registry

This server generates random registry with italian names, with GDPR Prospect purpouse in mind.

# Features

- generates new registry prospect
  - name, surname, address, province, sex - not mandatory
  - phisical person or company (persona giuridica)
  - GDPR contacts (address, phone, email)
  - several Privacy consents
  - last update, last state update
  - cold and warm prospect
- generates italian fancy names, simple or composite
- data are compliant with prospect state

# Installation

## Requirements

_Node_ v6 or greater.

## Getting started

Download and install dependencies

`npm i` or `yarn install`

Start the application

`npm start` or `yarn start`

Try to call the new API via browser or Postman

`http://localhost:3000/prospect/:randomId`
