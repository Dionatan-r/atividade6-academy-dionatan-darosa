/// <reference types="cypress" />

class CriarUsuario {
    // Atributos da classe são os seletores da nossa tela
    inputNomeUsuario = "#name";
    inputEmailUsuario = "#email";
    buttonNovo = "[href='/users/novo']"
    buttonSalvar = ".sc-iqcoie"
    buttonCancelar = "button.sc-iTONeN";
    buttonX = "button.sc-jdAMXn";


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

}

export var criarUsuario = new CriarUsuario();