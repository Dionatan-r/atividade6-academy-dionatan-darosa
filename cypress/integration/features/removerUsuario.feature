Feature: Remover Usuários
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas


    Background: Acessar a página inicial do sistema com usuário cadastrado
        Given cadastrei o usuário com dados válidos 
        | nome  | Dionatan Rosa      |
        | email | dionatan@teste.com |
        And cliquei no botão de deletar o usuário cadastado

    Scenario: Deve ser possível excluir as informações de um usuário cadastrado no sistema
        When visualizo a mensagem certa "AtençãoDeseja realmente remover este usuário ?"
        And clico no botão confirmar
        Then visualizo a mensagem certa "Usuário removido!"