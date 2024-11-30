Testes Automatizados - Portal da Transparência de Cabedelo com Cypress e Cucumber 

Este repositório contém testes automatizados para o site Portal da Transparência de Cabedelo utilizando Cypress e Cucumber BDD.

Tecnologias Utilizadas 🛠️
Cypress: Framework de testes de integração end-to-end 🧪.
Cucumber: Framework BDD (Behavior-Driven Development) para testes em Gherkin 📜.

Cenários de Teste 📝
Este repositório contém testes automatizados que simulam a interação de um usuário com o Portal da Transparência de Cabedelo.

1. Acessar o Portal da Transparência de Cabedelo 🌐
Objetivo: Verificar o acesso à página inicial do Portal da Transparência de Cabedelo.

Cenário: O usuário acessa a página inicial e verifica os links presentes no site.
Dado que o usuário está na página inicial do Portal da Transparência de Cabedelo
Então ele deve ver o título "Portal da Transparência"
E ele deve ver o link para "Legislação"
E ele deve ver o link para "Recursos Humanos"
E ele deve ver o link para "Transparência Ativa"

2. Realizar uma pesquisa no Portal da Transparência de Cabedelo 🔍
Objetivo: Verificar se a funcionalidade de pesquisa está funcionando corretamente no site.

Cenário: O usuário realiza uma pesquisa no portal e visualiza os resultados.
Dado que o usuário está na página inicial do Portal da Transparência de Cabedelo
Quando ele pesquisa por "Orçamento"
Então ele deve ver resultados relacionados a "Orçamento"

3. Acessar a página de "Legislação" 📑
Objetivo: Verificar se o link para a página de "Legislação" está funcionando corretamente.

Cenário: O usuário acessa a página de Legislação do Portal da Transparência.
Dado que o usuário está na página inicial do Portal da Transparência de Cabedelo
Quando ele clica no link "Legislação"
Então ele deve ser redirecionado para a página de Legislação
E ele deve ver o título "Legislação"

4. Acessar a página de "Recursos Humanos" 💼
Objetivo: Verificar se o link para a página de "Recursos Humanos" está funcionando corretamente.

Cenário: O usuário acessa a página de Recursos Humanos do Portal da Transparência.
Dado que o usuário está na página inicial do Portal da Transparência de Cabedelo
Quando ele clica no link "Recursos Humanos"
Então ele deve ser redirecionado para a página de Recursos Humanos
E ele deve ver o título "Recursos Humanos"

5. Verificar a presença de "Transparência Ativa" 🏛️
Objetivo: Verificar se a seção "Transparência Ativa" está visível na página inicial.

Cenário: O usuário verifica se o link de "Transparência Ativa" está presente.
Dado que o usuário está na página inicial do Portal da Transparência de Cabedelo
Quando ele pesquisa pela seção "Transparência Ativa"
Então ele deve ver o link para "Transparência Ativa"

6. Verificar os dados públicos no Portal da Transparência de Cabedelo 📊
Objetivo: Verificar se o link para os dados públicos está acessível.

Cenário: O usuário acessa a seção de dados públicos no portal.
Dado que o usuário está na página inicial do Portal da Transparência de Cabedelo
Quando ele clica no link "Dados Públicos"
Então ele deve ser redirecionado para a página de dados públicos
E ele deve ver informações sobre a disponibilização de dados
