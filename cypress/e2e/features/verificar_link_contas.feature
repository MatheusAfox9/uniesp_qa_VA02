Scenario: Verificar o link de "Contas Públicas"
  Given Eu estou na página inicial do Portal da Transparência de Cabedelo
  When Eu clico no link "Contas Públicas"
  Then Eu sou redirecionado para a página de "Contas Públicas"
  And Eu vejo o título "Contas Públicas"
    