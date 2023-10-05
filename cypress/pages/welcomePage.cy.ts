import { ToolBar } from "../pages/toolBar.cy"

class Welcome extends ToolBar {
  visit() {
    cy.visit("/")
  }

  visitWrongUrl() {
    cy.visit("/456456")
  }

  getResourceLearnAngular() {
    return cy.get("a.card:nth-child(1)")
  }

  getResourceCLIDocumentation() {
    return cy.get("a.card:nth-child(2)")
  }

  getResourceAngularBlog() {
    return cy.get("a.card:nth-child(3)")
  }

  getResourceAngularDevTools() {
    return cy.get("a.card:nth-child(4)")
  }

  getCommandNewComponent() {
    return cy.get("span:contains('New Component')")
  }

  getCommandAngularMaterial() {
    return cy.get("span:contains('Angular Material')")
  }

  getCommandAddPWASupport() {
    return cy.get("span:contains('Add PWA Support')")
  }

  getCommandAddDependency() {
    return cy.get("span:contains('Add Dependency')")
  }

  getCommandRunAndWatchTests() {
    return cy.get("span:contains('Run and Watch Tests')")
  }

  getCommandBuildForProduction() {
    return cy.get("span:contains('Build for Production')")
  }

  getTerminal() {
    return cy.get(".terminal pre")
  }

  getCardContainerAnimations() {
    return cy.get("a[title='Animations']")
  }

  getCardContainerCLI() {
    return cy.get("a[title='CLI']")
  }

  getCardContainerFindLocalMeetup() {
    return cy.get("a[title='Find a Local Meetup']")
  }

  getCardContainerJoinConversationOnDiscord() {
    return cy.get("a[title='Join the Conversation on Discord']")
  }

  getFooterRepoText() {
    return cy.get("footer > a:nth-child(1)")
  }

  getFooterRepoSign() {
    return cy.get("footer > a:nth-child(2)")
  }
}

export const welcome = new Welcome()