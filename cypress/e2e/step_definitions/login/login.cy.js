/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^que o cliente realizou o login$/, () => {
  cy.visit('https://sabesp-novaagv-hml.engdb.com.br/')
  cy.get('#fechaPop > .mat-button-wrapper > .mat-icon').click({force:true})
  cy.get('.botao-aceitar').click()
});


When(/^inseriu CPF e senha$/, () => {
    cy.get('.cpf').type('739.703.398-98')
    cy.get('.senha').type('@Sabesp4Win')
});

Then(/^O sistema deverá direcionar para home logada$/, () => {
	return true;
});
