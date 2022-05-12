/// <reference types="cypress" />

class ListarUsuarios {
    // Atributos da classe são os seletores da nossa tela
    nomeUsuario = "p[data-test='userDataName']";
    emailUsuario = "p[data-test='userDataEmail']";
    buttonCancelar = "button.sc-iTONeN";
    buttonX = "button.sc-jdAMXn";



    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    verificarNomeEmailUsuario(nome, email) {
        cy.contains(this.nomeUsuario, nome);
        cy.contains(this.emailUsuario, email);
    }

    verificarModalErro() {
        cy.contains(this.buttonCancelar, "Cancelar").should("be.visible");
        cy.contains(this.buttonX, "x").should("be.visible");
    }

}

export var listarUsuarios = new ListarUsuarios();