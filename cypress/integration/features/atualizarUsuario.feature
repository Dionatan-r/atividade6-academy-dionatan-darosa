Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas


    Scenario: Não deve ser possível atualizar os dados de um usuário com o mesmo e-mail de um usuário existente
        Given cadastrei o usuário com dados válidos 
        | nome  | Elma Chips      |
        | email | elma@teste.com  |
        And cadastrei o usuário com dados válidos 
        | nome  | Pepsi Cola      |
        | email | pepsi@teste.com |
        When atualizo o cadastro do usuário utilizando um e-mail existente
        Then visualizo a mensagem "ErroEste e-mail já é utilizado por outro usuário."

    # Scenario: Não deve ser possível atualizar um usuário com formato de email inválido
    #     Given acessei a página de atualização de usuário
    #     When informo os dados de atualização do usuário com formato de email inválido
    #     | email | dionatan      |
    #     Then visualizo a mensagem de erro "Formato de e-mail inválido"

    # Scenario: Não deve ser possível cadastrar um novo usuário com formato de nome inválido
    #     When informo os dados de um novo usuário com formato de nome inválido
    #     | nome   | Dionatan Rosa@     |
    #     | email  | dionatan@teste.com |
    #     Then visualizo a mensagem de erro "Formato do nome é inválido."

    # Scenario: Não deve ser possível cadastrar um novo usuário com um nome com menos de quatro caracteres
    #     When informo os dados de um novo usuário cujo nome tenha menos de quatro caracteres
    #     | nome   | Dio                 |
    #     | email  | dionatan@teste.com  |
    #     Then visualizo a mensagem de erro "Informe pelo menos 4 letras para o nome."

    # Scenario: Deve ser possível cadastrar um usuário cujo nome tenha 100 caracteres
    #     When informo os dados de um novo usuário cujo nome tenha 100 caracteres
    #     | nome   | Dioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo |
    #     | email  | dionatan1@teste.com                                                                                  |
    #     Then visualizo a mensagem "Usuário salvo com sucesso!"

    # Scenario: Não deve ser possível cadastrar um usuário cujo nome tenha mais de 100 caracteres
    #     When informo os dados de um novo usuário cujo nome tenha mais de 100 caracteres
    #     | nome   | Diooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo |
    #     | email  | dionatan@teste.com                                                                                    |
    #     Then visualizo a mensagem de erro "Informe no máximo 100 caracteres para o nome"

    # Scenario: Deve ser possível cadastrar um usuário cujo e-mail tenha 60 caracteres
    #     When informo os dados de um novo usuário cujo e-mail tenha 60 caracteres
    #     | nome   | Dionatan da Rosa                                             |
    #     | email  | dionatannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@teste.com |
    #     Then visualizo a mensagem "Usuário salvo com sucesso!"

    # Scenario: Não deve ser possível cadastrar um usuário cujo e-mail tenha mais de 60 caracteres
    #     When informo os dados de um novo usuário cujo e-mail tenha mais de 60 caracteres
    #     | nome   | Dionatan da Rosa                                              |
    #     | email  | dionatannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@teste.com |
    #     Then visualizo a mensagem de erro "Informe no máximo 60 caracteres para o e-mail"

    # Scenario: Não deve ser possível cadastrar um usuário sem informar o e-mail
    #     When informo os dados de um novo usuário sem informar o e-mail
    #     | nome   | Dionatan da Rosa |
    #     Then visualizo a mensagem de erro "O campo e-mail é obrigatório."

    # Scenario: Não deve ser possível cadastrar um usuário sem informar o nome
    #     When informo os dados de um novo usuário sem informar o nome
    #     | email  | dionatan@teste.com |
    #     Then visualizo a mensagem de erro "O campo nome é obrigatório."

    # Scenario: Não deve ser possível cadastrar um novo com erro no servidor
    #     When informo os dados de um novo usuário
    #     | nome  | Dionatan Rosa      |
    #     | email | dionatan@teste.com |
    #     And o sistema retorna erro no servidor
    #     Then visualizo a mensagem de erro com modal "ErroNão foi possível cadastrar o usuário!"

    # Scenario: Não deve ser possível cadastrar um novo com bad request
    #     When informo os dados de um novo usuário
    #     | nome  | Dionatan Rosa      |
    #     | email | dionatan@teste.com |
    #     And o sistema retorna bad request
    #     Then visualizo a mensagem de erro com modal "ErroNão foi possível cadastrar o usuário!"