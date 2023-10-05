/// <reference types="cypress" />
import { welcome } from "../pages/welcomePage.cy"

describe('welcome page tests', () => {
  beforeEach(() => {
    welcome.visit()
  })

  it('nav items from Resources take to right place', () => {
    welcome.getResourceLearnAngular()
      .invoke('attr', 'href')
      .should('eq', 'https://angular.io/tutorial')

    welcome.getResourceCLIDocumentation()
      .invoke('attr', 'href')
      .should('eq', 'https://angular.io/cli')

    welcome.getResourceAngularBlog()
      .invoke('attr', 'href')
      .should('eq', 'https://blog.angular.io/')

    welcome.getResourceAngularDevTools()
      .invoke('attr', 'href')
      .should('eq', 'https://angular.io/devtools/')
  })

  it('dynamic terminal display right info', () => {
    welcome.getCommandNewComponent().click()
    welcome.getTerminal().should('contain.text', 'ng generate component xyz')

    welcome.getCommandAngularMaterial().click()
    welcome.getTerminal().should('contain.text', 'ng add @angular/material')

    welcome.getCommandAddPWASupport().click()
    welcome.getTerminal().should('contain.text', 'ng add @angular/pwa')

    welcome.getCommandAddDependency().click()
    welcome.getTerminal().should('contain.text', 'ng add _____')

    welcome.getCommandRunAndWatchTests().click()
    welcome.getTerminal().should('contain.text', 'ng test')

    welcome.getCommandBuildForProduction().click()
    welcome.getTerminal().should('contain.text', 'ng build')
  })

  it('nav items from card-container take to right place', () => {
    welcome.getCardContainerAnimations()
      .invoke('attr', 'href')
      .should('eq', 'https://angular.io/guide/animations')

    welcome.getCardContainerCLI()
      .invoke('attr', 'href')
      .should('eq', 'https://cli.angular.io/')

    welcome.getCardContainerFindLocalMeetup()
      .invoke('attr', 'href')
      .should('eq', 'https://www.meetup.com/find/?keywords=angular')

    welcome.getCardContainerJoinConversationOnDiscord()
      .invoke('attr', 'href')
      .should('eq', 'https://discord.gg/angular')

    welcome.getFooterRepoText()
      .invoke('attr', 'href')
      .should('eq', 'https://github.com/angular/angular')

    welcome.getFooterRepoSign()
      .invoke('attr', 'href')
      .should('eq', 'https://github.com/angular/angular')
  })
})