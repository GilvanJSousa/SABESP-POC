Feature: 1.001 - Login com sucesso

  Scenario: Login com sucesso
    Given que o cliente realizou o login
    When inseriu CPF e senha
    Then O sistema deverá direcionar para home logada
