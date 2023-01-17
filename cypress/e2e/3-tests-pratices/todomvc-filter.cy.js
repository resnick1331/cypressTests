/// <reference types="cypress" />

describe("filtering", () => {
    beforeEach(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")

        cy.get('.new-todo', { timeout: 6000 }).type("Finish html course{enter}")
        cy.get('.new-todo', { timeout: 6000 }).type("Learn JavaScript{enter}")
        cy.get('.new-todo', { timeout: 6000 }).type("Use cypress{enter}")
        cy.get('.new-todo', { timeout: 6000 }).type("Get an honest job{enter}")
        //cy.get('.todo-list li:nth-child(2) .toggle').click()

        cy.get('.toggle').eq(2).click()

    })

    it('should filter "Active" to do', () => {

        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 3)
    })

})