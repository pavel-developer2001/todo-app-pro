/// <reference types="cypress" />

describe("todo e2e tests", () => {
  let data: any

  beforeEach(() => {
    cy.request("http://localhost:3001/todos").then((response) => {
      data = response
    })
  })
  it("CRUD todos", () => {
    cy.visit("/")
    cy.get("[data-testid='create-todo-input']").type("test todo", {
      force: true,
    })
    cy.get("[data-testid='create-todo-btn']").click({
      multiple: true,
      force: true,
    })
    cy.request({
      url: `http://localhost:3001/todos`,
      method: "POST",
      body: {
        id: "100",
        title: "test todo",
        categoryId: "G5CjnWYEgaaFk_sqtJl1i",
      },
      failOnStatusCode: false,
    })
  })
})
