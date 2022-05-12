/// <reference types="cypress" />

class AtualizarUsuario {
    // Atributos da classe são os seletores da nossa tela
    buttonX = "button.sc-jdAMXn";
    inputNomeUsuario = "#name";
    inputEmailUsuario = "#email";
    buttonNovo = "[href='/users/novo']";
    buttonSalvar = ".sc-iqcoie";
    inputBuscar = ".sc-gKXOVf";
    buttonDeletar = ".sc-kgflAQ";
    buttonConfirmar = "button.gBlXkK";
    buttonDetalhes = "#userDataDetalhe";
    buttonEditar = "button.gRlNQj";
    campoEmail = "#userEmail";


    visitarSistema() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    clicarBotaoNovo() {
        cy.get(this.buttonNovo).click();
    }

    visitarNovo() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users/novo");
    }

    preencherNomeEEmail(nome, email) {
        cy.get(this.inputNomeUsuario).type(nome);
        cy.get(this.inputEmailUsuario).type(email);
    }

    salvarUsuario() {
        cy.get(this.buttonSalvar).click();
    }

    preencherNome(nome) {
        cy.get(this.inputNomeUsuario).type(nome);
    }

    preencherEmail(email) {
        cy.get(this.inputEmailUsuario).type(email);
    }

    verificarModalErro() {
        cy.contains(this.buttonCancelar, "Cancelar").should("be.visible");
        cy.contains(this.buttonX, "x").should("be.visible");
    }

    clicarBotaoBuscarEPreencher(name) {
        cy.get(this.inputBuscar).click().type(name);
    }

    clicarBotaoDetalhes() {
        cy.get(this.buttonDetalhes).click();
    }

    clicarBotaoEditar() {
        cy.contains("button","Editar").click();
    }

    clicarCampoEmailEEscrever() {
        cy.get(this.campoEmail).click().clear().type("pepsi@teste.com");
    }

    clicarBotaoSalvar() {
        cy.contains("button","Salvar").click();
    }


}

export var atualizarUsuario = new AtualizarUsuario();