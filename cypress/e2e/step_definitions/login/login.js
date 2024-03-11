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
    cy.xpath('//*[@id="login_input_cpf"]').type('73970339898')
    cy.xpath('//*[@id="senha"]').type('@Sabesp4Win')
    cy.get('#login-component_logar').click({force:true})
    cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click({force:true})
});

Then(/^O sistema deverá direcionar para home logada$/, () => {
  cy.get('#selecao-endereco').click({force:true})
  cy.get('h1').should('contain', 'Agência Virtual', {force:true})
  cy.get('#campo-selecao').click({force:true})
});
