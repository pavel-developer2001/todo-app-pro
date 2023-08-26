/// <reference types="cypress" />

describe("category e2e tests", () => {
  it("CRUD categories", () => {
    cy.visit("/")
    cy.get("[data-testid='category-input']").type("test category")
  })
})
