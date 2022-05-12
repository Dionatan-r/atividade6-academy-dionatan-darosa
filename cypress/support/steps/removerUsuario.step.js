import { removerUsuario } from "../pages/crud/RemoverUsuario.po"


Given ("cadastrei o usuário com dados válidos", (tabela) => {
    removerUsuario.visitarNovo();
    var dadosTabela = tabela.rowsHash();
    removerUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    removerUsuario.salvarUsuario();
    cy.wait(500);
});

And ("cliquei no botão de deletar o usuário cadastado", () => {
    removerUsuario.visitarSistema();
    removerUsuario.clicarBotaoBuscarEPreencher("dio");
    removerUsuario.clicarBotaoDeletar();
    //cy.wait(500);
});

When ("visualizo a mensagem certa {string}", (mensagemCadastro) => {
    cy.contains(mensagemCadastro).should("be.visible");
});

And ("clico no botão confirmar", () => {
    removerUsuario.clicarBotaoConfirmar();
});

Then ("visualizo a mensagem certa {string}", (mensagemCadastro) => {
    cy.contains(mensagemCadastro).should("be.visible");
});














// When ("existe uma lista de usuários cadastrados do sistema", () => {
//     cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
//         fixture: "crud/listaCompUsuarios.json"
//     });
// });

// Then ("visualizo os usuários da lista no sistema", () => {
//     removerUsuario.verificarNomeEmailUsuario("Dionatan da Rosa", "dionatan@teste.com");
//     removerUsuario.verificarNomeEmailUsuario("Ariel Missagia", "ariel@teste.com");
//     removerUsuario.verificarNomeEmailUsuario("Francine Reis", "francine@teste.com");
//     removerUsuario.verificarNomeEmailUsuario("Pedro Gabriel", "pedro@teste.com");
//     removerUsuario.verificarNomeEmailUsuario("Luiza da Rosa", "luiza@teste.com");
//     removerUsuario.verificarNomeEmailUsuario("Elma Chips", "elma@teste.com");
// });

// When ("não existem usuários cadastrados no sistema", () => {
//     cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
//         fixture: "crud/listaVaziaUsuarios.json"
//     });
// });

// Then ("visualizo a opção de cadastrar um usuário", () => {
//     cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should("be.visible");
//     cy.contains(".sc-ezWOiH", "Cadastre um novo usuário").should("be.visible").click();
//     cy.url().should("equal", "https://academy-crud-frontend.herokuapp.com/users/novo")
// });

// When ("o sistema estiver com erro interno de servidor", () => {
//     cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
//         statusCode: 500,
//         body: []
//         });
// });

// Then ("visualizo a mensagem {string}", (mensagemErro) => {
//     cy.contains(mensagemErro).should("be.visible");
//     removerUsuario.verificarModalErro();
// });