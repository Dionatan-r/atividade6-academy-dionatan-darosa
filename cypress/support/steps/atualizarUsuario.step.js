import { atualizarUsuario } from "../pages/crud/AtualizarUsuario.po"

Given ("cadastrei o usuário com dados válidos", (tabela) => {
    atualizarUsuario.visitarSistema();
    atualizarUsuario.clicarBotaoNovo();
    atualizarUsuario.visitarNovo();
    var dadosTabela = tabela.rowsHash();
    atualizarUsuario.preencherNomeEEmail(dadosTabela.nome, dadosTabela.email);
    atualizarUsuario.salvarUsuario();
    cy.wait(1000);

});

When ("atualizo o cadastro do usuário utilizando um e-mail existente", () => {
    atualizarUsuario.visitarSistema();
    atualizarUsuario.clicarBotaoBuscarEPreencher("elma");
    atualizarUsuario.clicarBotaoDetalhes();
    atualizarUsuario.clicarBotaoEditar();
    atualizarUsuario.clicarCampoEmailEEscrever();
    atualizarUsuario.clicarBotaoSalvar();
});

Then ("visualizo a mensagem {string}", (mensagemCadastro) => {
    cy.contains(mensagemCadastro).should("be.visible");
});




