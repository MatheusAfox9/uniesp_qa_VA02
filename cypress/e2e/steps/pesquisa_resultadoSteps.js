import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Eu estou na página inicial do Portal da Transparência de Cabedelo', () => {
  cy.visit('https://cabedelo.pb.gov.br/portal-da-transparencia/');
});

When('Eu pesquiso por {string}', (termo) => {
  cy.get('input[type="search"]').type(termo);
  cy.get('button[type="submit"]').click();
});

Then('Eu vejo resultados relacionados a {string}', (termo) => {
  cy.get('.search-results').should('contain.text', termo);
});
