/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-iframe');
const { execute, load } = require("recaptcha-frontend");
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given(/^que o cliente realizou o login$/, () => {
  cy.visit('https://sabesp-novaagv-hml.engdb.com.br/') // { timeout: 50000}) 
  cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click()
  cy.get('.botao-aceitar').click()
});

When(/^inseriu CPF e senha$/, () => {
    cy.xpath('/html/body').type('739.703.398-98')
    cy.xpath('/html/body').type('@Sabesp4Win')
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
    cy.get('iframe')
      .first()
      .its('0.contentDocument.body')
      .should('not.be.undefined')
      .and('not.be.empty')
      .then(cy.wrap)
      .find('#recaptcha-anchor')
      .should('be.visible')
      .click();
});

Then(/^O sistema deverá direcionar para home logada$/, () => {
  cy.get('#login-component_logar').click({force:true})
  cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click({force:true})
  cy.get('#selecao-endereco').click({force:true})
  cy.get('h1').should('contain', 'Agência Virtual', {force:true})
  cy.get('#campo-selecao').click({force:true})
});
