import { criarUsuario } from "../pages/crud/CriarUsuario.po"

Given ("acessei a página do sistema", () => {
    criarUsuario.visitarSistema();
    criarUsuario.clicarBotaoNovo();
});

Given ("acessei a página de cadastro de um novo usuário", () => {
    criarUsuario.visitarNovo();
});

When ("informo os dados válidos de um novo usuário", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        });
});

Then ("visualizo a mensagem {string}", (mensagemCadastro) => {
    cy.contains(mensagemCadastro).should("be.visible");
});

When ("informo os dados de um novo usuário com formato de email inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
});

Then ("visualizo a mensagem de erro com modal {string}", (mensagemCadastro) => {
    cy.contains(mensagemCadastro).should("be.visible");
    criarUsuario.verificarModalErro();
});

Then ("visualizo a mensagem de erro {string}", (mensagemCadastro) => {
    cy.contains(mensagemCadastro).should("be.visible");
});

When ("informo os dados de um novo usuário com formato de nome inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
});

When ("informo os dados de um novo usuário cujo nome tenha menos de quatro caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
});

When ("informo os dados de um novo usuário cujo nome tenha 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        });
});

When ("informo os dados de um novo usuário cujo nome tenha mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
});

When ("informo os dados de um novo usuário cujo e-mail tenha 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        });
});

When ("informo os dados de um novo usuário cujo e-mail tenha mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
});

When ("informo os dados de um novo usuário sem informar o e-mail", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNome(dadosTabela.nome);
    criarUsuario.salvarUsuario();
});

When ("informo os dados de um novo usuário sem informar o nome", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherEmail(dadosTabela.email);
    criarUsuario.salvarUsuario();
});

When ("informo os dados de um novo usuário utilizado um e-mail já existente", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    criarUsuario.salvarUsuario();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 422,
        });
});

When ("informo os dados de um novo usuário", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
});

And ("o sistema retorna erro no servidor", () => {
    criarUsuario.salvarUsuario();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 500,
        });
});

And ("o sistema retorna bad request", () => {
    criarUsuario.salvarUsuario();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 400,
        });
});









