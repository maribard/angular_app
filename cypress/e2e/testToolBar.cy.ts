/// <reference types="cypress" />
import { welcome } from "../pages/welcomePage.cy"
import { form } from "../pages/formPage.cy"
import { stepper } from "../pages/stepperPage.cy"
import { toolBar } from "../pages/toolBar.cy"


describe('toolbar tests', () => {
  beforeEach(() => {
    welcome.visit()
  })

  it('displaying 3 views (Welcome, Form, Stepper)', () => {
    welcome.getUrl().should('eq', 'https://angular-qa-recruitment-app.netlify.app/')
    welcome.getToolbar().should('be.visible')
    welcome.getTwitterLabel().should('be.visible')
    welcome.getYouTubeLabel().should('be.visible')

    form.getFormButtonAndClick()
    form.getUrl().should('eq', 'https://angular-qa-recruitment-app.netlify.app/form')
    form.getToolbar().should('be.visible')
    form.getTwitterLabel().should('be.visible')
    form.getYouTubeLabel().should('be.visible')

    stepper.getStepperButtonAndClick()
    stepper.getUrl().should('eq', 'https://angular-qa-recruitment-app.netlify.app/stepper')
    stepper.getToolbar().should('be.visible')
    stepper.getTwitterLabel().should('be.visible')
    stepper.getYouTubeLabel().should('be.visible')

    welcome.getMainButtonAndClick()
    welcome.getUrl().should('eq', 'https://angular-qa-recruitment-app.netlify.app/')
    welcome.getToolbar().should('be.visible')
    welcome.getTwitterLabel().should('be.visible')
    welcome.getYouTubeLabel().should('be.visible')
  })

  it.only('Twitter and YouTube icons should redirect to right pages', () => {
    toolBar.getTwitterLabel()
      .invoke('attr', 'href')
      .should('contain', 'https://twitter.com/angular')

    toolBar.getYouTubeLabel()
      .invoke('attr', 'href')
      .should('contain', 'https://youtube.com/angular')
  })
})