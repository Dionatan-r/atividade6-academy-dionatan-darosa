/// <reference types="cypress" />

class RemoverUsuario {
    // Atributos da classe são os seletores da nossa tela
    nomeUsuario = "p[data-test='userDataName']";
    emailUsuario = "p[data-test='userDataEmail']";
    //buttonCancelar = "button.sc-iTONeN";
    buttonX = "button.sc-jdAMXn";
    inputNomeUsuario = "#name";
    inputEmailUsuario = "#email";
    buttonNovo = "[href='/users/novo']";
    buttonSalvar = ".sc-iqcoie";
    inputBuscar = ".sc-gKXOVf";
    buttonDeletar = ".sc-kgflAQ";
    buttonConfirmar = "button.gBlXkK";

    visitarSistema() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    visitarNovo() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users/novo");
    }

    clicarBotaoNovo() {
        cy.get(this.buttonNovo).click();
    }

    clicarBotaoBuscarEPreencher(name) {
        cy.get(this.inputBuscar).click().clear().type(name);
    }

    preencherNomeEEmail(nome, email) {
        cy.get(this.inputNomeUsuario).type(nome);
        cy.get(this.inputEmailUsuario).type(email);
    }

    salvarUsuario() {
        cy.get(this.buttonSalvar).click();
    }

    clicarBotaoDeletar() {
        cy.get(this.buttonDeletar).click();
    }

    clicarBotaoConfirmar() {
        cy.contains("button", "Confirmar").click();
    }

}

export var removerUsuario = new RemoverUsuario();