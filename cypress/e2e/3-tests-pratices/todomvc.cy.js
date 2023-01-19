/// <reference types="cypress" />

import { TodoPage } from "../../page-objects/todo-page"

/*it("should be able to add a new todo to the list", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/")

    cy.get('.new-todo', { timeout: 6000 }).type("Finish html course{enter}")

    cy.get("label").should("have.text", "Finish html course")

    cy.get(".toggle").should("not.be.checked")

    cy.get('.toggle').click()

    cy.get("label").should("have.css", "text-decoration-line", "line-through")

    cy.contains("Clear").click()

    cy.get(".todo-list").should("not.have.descendants", "li")
})*/

const todoPage = new TodoPage()

describe("todo actions", () => {
    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo("Finish html course{enter}")
        
    })
    it("should check todo label", () => {

        todoPage.validateTodoTxt(0,"Finish html course")
        //cy.get("label").should("have.text", "Finish html course")

        cy.get(".toggle").should("not.be.checked")

    })

    it("should mark a new todo as completed", () => {
        cy.get('.toggle').click()

        cy.get("label").should("have.css", "text-decoration-line", "line-through")

    })

    it("should clear completed todo", () => {

        cy.get('.toggle').click()
        cy.contains("Clear").click()

        cy.get(".todo-list").should("not.have.descendants", "li")
    })

})
