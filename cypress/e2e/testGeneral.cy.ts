/// <reference types="cypress" />
import { welcome } from "../pages/welcomePage.cy"
import { form } from "../pages/formPage.cy"
import { stepper } from "../pages/stepperPage.cy"

describe('general tests', () => {

  it('redirection to main page', () => {
    welcome.visitWrongUrl()
    welcome.getUrl().should('eq', 'https://angular-qa-recruitment-app.netlify.app/')
  })

  it('redirection to main page from form', () => {
    form.visitWrongUrl()
    form.getUrl().should('eq', 'https://angular-qa-recruitment-app.netlify.app/')
  })

  it('redirection to main page from stepper', () => {
    stepper.visitWrongUrl()
    stepper.getUrl().should('eq', 'https://angular-qa-recruitment-app.netlify.app/')
  })
})