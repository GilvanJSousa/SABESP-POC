Feature: 1.001 - Login com sucesso

  Scenario: Login com sucesso
    Given que o cliente realizou o login
    When inseriu CPF e senha
    Then O sistema deverá direcionar para home logada

  Scenario: Login com senha invalida
    Given que o cliente entra no site
    When inseriu CPF e senha incorreta
    Then O sistema deverá informar senha invalida
