/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-iframe');
const { execute, load } = require("recaptcha-frontend");
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given(/^que o cliente entra no site$/, () => {
    cy.visit('https://sabesp-novaagv-hml.engdb.com.br/') // { timeout: 50000}) 
    cy.xpath('//*[@id="fechaPop"]/span[1]/mat-icon').click()
    cy.get('.botao-aceitar').click()
});

When(/^inseriu CPF e senha incorreta$/, () => {
    cy.xpath('//*[@id="login_input_cpf"]').type('73970339898')
    cy.xpath('//*[@id="senha"]').type('!Sabesp4Win')
    cy.get('#login-component_logar').click({force:true})
});

Then(/^O sistema deverá informar senha invalida$/, () => {
	cy.get('#erro').should('contain', 'CPF ou senha não correspondem em nossa base de dados, por favor verifique se os números do CPF e Senha estão corretos. Se você não realizou seu cadastro nesta Nova Agência Virtual, clique aqui.')
});
