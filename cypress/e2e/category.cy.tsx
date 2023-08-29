/// <reference types="cypress" />

describe("category e2e tests", () => {
  let data: any

  beforeEach(() => {
    cy.request("http://localhost:3001/categories").then((response) => {
      data = response
    })
  })
  it("CRUD categories", () => {
    cy.visit("/")
    cy.get("[data-testid='category-input']").type("test category")
    cy.get("[data-testid='category-btn']").click({ force: true })
    cy.request({
      url: `http://localhost:3001/categories`,
      method: "POST",
      body: { id: "100", title: "test category" },
      failOnStatusCode: false,
    })
  })
})
