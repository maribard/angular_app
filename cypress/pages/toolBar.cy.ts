export class ToolBar {
	getUrl() {
		return cy.url()
	}

	getMainButtonAndClick() {
		return cy.get("#main-view-link > span").click()
	}

	getFormButtonAndClick() {
		return cy.get("#form-view-link > span").click()
	}

	getStepperButtonAndClick() {
		return cy.get("#stepper-view-link > span").click()
	}

	getToolbar() {
		return cy.get("div[role='banner']")
	}

	getTwitterLabel() {
		return cy.get("a[aria-label='Angular on twitter']")
	}

	getYouTubeLabel() {
		return cy.get("a[aria-label='Angular on YouTube']")
	}
}

export const toolBar = new ToolBar()