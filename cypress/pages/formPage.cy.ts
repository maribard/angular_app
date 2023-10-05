import { ToolBar } from "../pages/toolBar.cy"

class Form extends ToolBar {
  visit() {
    cy.visit("/form")
  }

  visitWrongUrl() {
    cy.visit("/form/456456")
  }

  getLabelName() {
    return cy.get("label[for='name']")
  }

  sendTextToInputName(text) {
    if (text == "") {
      return cy.get('#name').clear()
    } else {
      return cy.get('#name').clear().type(text)
    }
  }

  getLabelAlterEgo() {
    return cy.get("label[for='alterEgo']")
  }

  sendTextToInputAlterEgo(text) {
    return cy.get('#alterEgo').clear().type(text)
  }

  getLabelPower() {
    return cy.get("label[for='power']")
  }

  selectOneOptionFromHeroPower(number) {
    return cy.get('#power').select(number)
  }

  getSubmitButton() {
    return cy.get("button[type='submit']")
  }

  getSubmittedResultTitle() {
    return cy.get("div.container.results h2")
  }

  getSubmittedName() {
    return cy.get("div.col-xs-9").eq(0)
  }

  getSubmittedAlterEgo() {
    return cy.get("div.col-xs-9").eq(1)
  }

  getSubmittedPower() {
    return cy.get("div.col-xs-9").eq(2)
  }

  getAlertName() {
    return cy.get(".alert.alert-danger").eq(0)
  }

}

export const form = new Form()