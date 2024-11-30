import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Eu estou na página inicial do Portal da Transparência de Cabedelo', () => {
  cy.visit('https://cabedelo.pb.gov.br/portal-da-transparencia/');
});

Then('Eu vejo o título "Portal da Transparência"', () => {
  cy.get('h1').should('contain.text', 'Portal da Transparência');
});

Then('Eu vejo o link para "Legislação"', () => {
  cy.contains('Legislação').should('be.visible');
});

Then('Eu vejo o link para "Recursos Humanos"', () => {
  cy.contains('Recursos Humanos').should('be.visible');
});
