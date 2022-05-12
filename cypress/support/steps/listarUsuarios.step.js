import { listarUsuarios } from "../pages/crud/ListarUsuarios.po"

Given ("acessei a página inicial do sistema", () => {
    listarUsuarios.visitar();
});

When ("existe uma lista de usuários cadastrados do sistema", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "crud/listaCompUsuarios.json"
    });
});

Then ("visualizo os usuários da lista no sistema", () => {
    listarUsuarios.verificarNomeEmailUsuario("Dionatan da Rosa", "dionatan@teste.com");
    listarUsuarios.verificarNomeEmailUsuario("Ariel Missagia", "ariel@teste.com");
    listarUsuarios.verificarNomeEmailUsuario("Francine Reis", "francine@teste.com");
    listarUsuarios.verificarNomeEmailUsuario("Pedro Gabriel", "pedro@teste.com");
    listarUsuarios.verificarNomeEmailUsuario("Luiza da Rosa", "luiza@teste.com");
    listarUsuarios.verificarNomeEmailUsuario("Elma Chips", "elma@teste.com");
});

When ("não existem usuários cadastrados no sistema", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "crud/listaVaziaUsuarios.json"
    });
});

Then ("visualizo a opção de cadastrar um usuário", () => {
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should("be.visible");
    cy.contains(".sc-ezWOiH", "Cadastre um novo usuário").should("be.visible").click();
    cy.url().should("equal", "https://academy-crud-frontend.herokuapp.com/users/novo")
});

When ("o sistema estiver com erro interno de servidor", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 500,
        body: []
        });
});

Then ("visualizo a mensagem {string}", (mensagemErro) => {
    cy.contains(mensagemErro).should("be.visible");
    listarUsuarios.verificarModalErro();
});