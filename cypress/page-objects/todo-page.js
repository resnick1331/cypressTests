export class TodoPage{

    navigate(){
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    }

    addTodo(todoText){
        cy.get('.new-todo', { timeout: 6000 }).type(todoText+"{enter}")
        // cy.get('.new-todo', { timeout: 6000 }).type(`${todoText}{enter}`)  ${input} treats the input as a variable, `` to consider all as text
    }

    validateTodoTxt(todoIndex, expectedTxt){

        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedTxt)

        
    }
}

