import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Eu estou na página inicial do Portal da Transparência de Cabedelo', () => {
  cy.visit('https://cabedelo.pb.gov.br/portal-da-transparencia/');
});

When('Eu clico no link {string}', (linkTexto) => {
  cy.contains(linkTexto).click();
});

Then('Eu sou redirecionado para a página de {string}', (pagina) => {
  cy.url().should('include', pagina.toLowerCase().replace(' ', '-'));
});

Then('Eu vejo a informação sobre os dados públicos', () => {
  cy.get('p').should('contain.text', 'dados públicos');
});
