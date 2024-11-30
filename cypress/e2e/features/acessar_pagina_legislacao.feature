Scenario: Acessar a página de "Legislação"
  Given Eu estou na página inicial do Portal da Transparência de Cabedelo
  When Eu clico no link "Legislação"
  Then Eu sou redirecionado para a página de "Legislação"
  And Eu vejo o título "Legislação"
