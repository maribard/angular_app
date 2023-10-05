import { ToolBar } from "../pages/toolBar.cy"

class Stepper extends ToolBar {
  visit() {
    cy.visit("/stepper")
  }

  visitWrongUrl() {
    cy.visit("/stepper/456456")
  }

  getFirstStepHeader() {
    return cy.get("#cdk-step-label-0-0")
  }

  getSecondStepHeader() {
    return cy.get("#cdk-step-label-0-1")
  }

  getThirdStepHeader() {
    return cy.get("#cdk-step-label-0-2")
  }

  getInputName(text) {
    return cy.get("#mat-input-0").type(text)
  }

  getButtonNext() {
    return cy.get("#cdk-step-content-0-0 > form > div > button")
  }

  getInputAddress(text) {
    return cy.get("#mat-input-1").type(text)
  }

  getButtonBackAd() {
    return cy.get("#cdk-step-content-0-1 > form > div > button").eq(0)
  }

  getButtonNextAd() {
    return cy.get("#cdk-step-content-0-1 > form > div > button").eq(1)
  }

  getNameInfo() {
    return cy.get("#cdk-step-content-0-2 > p:nth-child(2)")
  }

  getAddresssInfo() {
    return cy.get("#cdk-step-content-0-2 > p:nth-child(3)")
  }

  getFirstTextLabel() {
    return cy.get(".mat-step-label-selected > div")
  }

  getSecondTextLabel() {
    return cy.get("#cdk-step-label-0-1 > div.mat-step-label > div")
  }

  getThirdTextLabel() {
    return cy.get("#cdk-step-label-0-2 > div.mat-step-label > div")
  }

  getFirstIconState() {
    return cy.get("#cdk-step-label-0-0 > div.mat-step-icon.mat-step-icon-state-number > div > span")
  }

  getSecondIconState() {
    return cy.get("#cdk-step-label-0-1 > div.mat-step-icon.mat-step-icon-state-number > div > span")
  }

  getThirdIconState() {
    return cy.get("#cdk-step-label-0-2 > div.mat-step-icon.mat-step-icon-state-number > div > span")
  }

  getEditedFirstIconState() {
    return cy.get("#cdk-step-label-0-0 > div.mat-step-icon.mat-step-icon-state-edit > div > span")
  }

  getEditedSecondIconState() {
    return cy.get("#cdk-step-label-0-1 > div.mat-step-icon.mat-step-icon-state-edit > div > span")
  }

  getLengthAlert() {
    return cy.get("div.ng-star-inserted > small")
  }

  checkFirstState() {
    this.getFirstStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'true')
    this.getFirstTextLabel().should('have.text', "Fill out your name")
    this.getFirstIconState()
      .should('be.visible')
      .and('have.text', '1')

    this.getSecondStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'false')
    this.getSecondStepHeader()
      .invoke('attr', 'aria-disabled')
      .should('eq', 'true')
    this.getSecondTextLabel().should('have.text', "Fill out your address")
    this.getSecondIconState()
      .should('be.visible')
      .and('have.text', '2')

    this.getThirdStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'false')
    this.getThirdStepHeader()
      .invoke('attr', 'aria-disabled')
      .should('eq', 'true')
    this.getThirdTextLabel().should('have.text', "Done")
    this.getThirdIconState()
      .should('be.visible')
      .and('have.text', '3')
  }

  checkSecondState() {
    this.getFirstIconState()
      .should('not.exist')
    this.getEditedFirstIconState()
      .should('be.visible')
    this.getFirstStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'false')

    this.getSecondStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'true')
    this.getSecondIconState()
      .should('be.visible')
      .and('have.text', '2')

    this.getThirdStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'false')
    this.getThirdStepHeader()
      .invoke('attr', 'aria-disabled')
      .should('eq', 'true')
    this.getThirdIconState()
      .should('be.visible')
      .and('have.text', '3')
  }

  checkThirdState() {
    this.getFirstIconState()
      .should('not.exist')
    this.getEditedFirstIconState()
      .should('be.visible')
    this.getFirstStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'false')

    this.getSecondIconState()
      .should('not.exist')
    this.getSecondStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'false')
    this.getEditedSecondIconState()
      .should('be.visible')

    this.getThirdStepHeader()
      .invoke('attr', 'aria-selected')
      .should('eq', 'true')
    this.getThirdIconState()
      .should('be.visible')
      .and('have.text', '3')
  }
}

export const stepper = new Stepper()