Feature: Listar Usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Background: Acessar a página inicial do sistema
        Given acessei a página inicial do sistema

    Scenario: Deve ser possível visualizar as informações de usuários cadastrados no sistema
        When existe uma lista de usuários cadastrados do sistema
        Then visualizo os usuários da lista no sistema

    Scenario: Deve existir uma opção para cadastrar um usuário caso não existam usuários cadastrados
        When não existem usuários cadastrados no sistema
        Then visualizo a opção de cadastrar um usuário

    Scenario: Deve ser possível visualizar mensagem de erro interno de servidor
        When o sistema estiver com erro interno de servidor
        Then visualizo a mensagem "ErroNão foi possível consultar os usuários cadastrados."

