Feature: Criar Usuario
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a página inicial do sistema
        Given acessei a página do sistema
        And acessei a página de cadastro de um novo usuário

    Scenario: Deve ser possível cadastrar um novo usuário com dados válidos
        When informo os dados válidos de um novo usuário
        | nome  | Dionatan Rosa      |
        | email | dionatan@teste.com |
        Then visualizo a mensagem "Usuário salvo com sucesso!"

    Scenario: Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário
        When informo os dados de um novo usuário utilizado um e-mail já existente
        | nome  | Dionatan Rosa      |
        | email | dionatan@teste.com |
        Then visualizo a mensagem de erro com modal "ErroEste e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível cadastrar um novo usuário com formato de email inválido
        When informo os dados de um novo usuário com formato de email inválido
        | nome  | Dionatan Rosa |
        | email | dionatan      |
        Then visualizo a mensagem de erro "Formato de e-mail inválido"

    Scenario: Não deve ser possível cadastrar um novo usuário com formato de nome inválido
        When informo os dados de um novo usuário com formato de nome inválido
        | nome   | Dionatan Rosa@     |
        | email  | dionatan@teste.com |
        Then visualizo a mensagem de erro "Formato do nome é inválido."

    Scenario: Não deve ser possível cadastrar um novo usuário com um nome com menos de quatro caracteres
        When informo os dados de um novo usuário cujo nome tenha menos de quatro caracteres
        | nome   | Dio                 |
        | email  | dionatan@teste.com  |
        Then visualizo a mensagem de erro "Informe pelo menos 4 letras para o nome."

    Scenario: Deve ser possível cadastrar um usuário cujo nome tenha 100 caracteres
        When informo os dados de um novo usuário cujo nome tenha 100 caracteres
        | nome   | Dioooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo |
        | email  | dionatan1@teste.com                                                                                  |
        Then visualizo a mensagem "Usuário salvo com sucesso!"

    Scenario: Não deve ser possível cadastrar um usuário cujo nome tenha mais de 100 caracteres
        When informo os dados de um novo usuário cujo nome tenha mais de 100 caracteres
        | nome   | Diooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo |
        | email  | dionatan@teste.com                                                                                    |
        Then visualizo a mensagem de erro "Informe no máximo 100 caracteres para o nome"

    Scenario: Deve ser possível cadastrar um usuário cujo e-mail tenha 60 caracteres
        When informo os dados de um novo usuário cujo e-mail tenha 60 caracteres
        | nome   | Dionatan da Rosa                                             |
        | email  | dionatannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@teste.com |
        Then visualizo a mensagem "Usuário salvo com sucesso!"

    Scenario: Não deve ser possível cadastrar um usuário cujo e-mail tenha mais de 60 caracteres
        When informo os dados de um novo usuário cujo e-mail tenha mais de 60 caracteres
        | nome   | Dionatan da Rosa                                              |
        | email  | dionatannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@teste.com |
        Then visualizo a mensagem de erro "Informe no máximo 60 caracteres para o e-mail"

    Scenario: Não deve ser possível cadastrar um usuário sem informar o e-mail
        When informo os dados de um novo usuário sem informar o e-mail
        | nome   | Dionatan da Rosa |
        Then visualizo a mensagem de erro "O campo e-mail é obrigatório."

    Scenario: Não deve ser possível cadastrar um usuário sem informar o nome
        When informo os dados de um novo usuário sem informar o nome
        | email  | dionatan@teste.com |
        Then visualizo a mensagem de erro "O campo nome é obrigatório."

    Scenario: Não deve ser possível cadastrar um novo com erro no servidor
        When informo os dados de um novo usuário
        | nome  | Dionatan Rosa      |
        | email | dionatan@teste.com |
        And o sistema retorna erro no servidor
        Then visualizo a mensagem de erro com modal "ErroNão foi possível cadastrar o usuário!"

    Scenario: Não deve ser possível cadastrar um novo com bad request
        When informo os dados de um novo usuário
        | nome  | Dionatan Rosa      |
        | email | dionatan@teste.com |
        And o sistema retorna bad request
        Then visualizo a mensagem de erro com modal "ErroNão foi possível cadastrar o usuário!"



        
