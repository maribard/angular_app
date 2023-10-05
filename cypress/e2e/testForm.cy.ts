/// <reference types="cypress" />
import { form } from "../pages/formPage.cy"


describe('form page tests', () => {
	beforeEach(() => {
		form.visit()
	})

	it('typing and displaying data', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			cy.fixture('heroPowerOption.json').then((options) => {
				form.getLabelName().should('have.text', 'Name')
				form.sendTextToInputName(data["formName"])

				form.getLabelAlterEgo().should('have.text', 'Alter Ego')
				form.sendTextToInputAlterEgo(data["formAlterEgo"])

				form.getLabelPower().should('have.text', 'Hero Power')

				let randomNum = Math.floor(Math.random() * 4)
				form.selectOneOptionFromHeroPower(randomNum)
				form.getSubmitButton().click()

				form.getSubmittedResultTitle().should('have.text', 'You submitted the following:')
				form.getSubmittedName().should('have.text', data["formName"])
				form.getSubmittedAlterEgo().should('have.text', data["formAlterEgo"])
				form.getSubmittedPower().should('have.text', options['' + randomNum])
			})
		})
	})

	it('triming Name and Ego', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			form.sendTextToInputName(data["formNameWithSpaces"])
			form.sendTextToInputAlterEgo(data["formAlterEgoWithSpaces"])
			form.getSubmitButton().click()

			form.getSubmittedResultTitle().should('have.text', 'You submitted the following:')
			form.getSubmittedName().should('have.text', data["formName"])
			form.getSubmittedAlterEgo().should('have.text', data["formAlterEgo"])
		})
	})

	it('typing long Name and Ego', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			form.sendTextToInputName(data["string1"])
			form.sendTextToInputAlterEgo(data["string2"])
		})
		form.getSubmitButton().click()
		form.getSubmittedResultTitle().should('not.be.visible')
	})

	it('typing Name and Ego as space', () => {
		form.sendTextToInputName(" ")
		form.sendTextToInputAlterEgo(" ")
		form.getSubmitButton().click()

		form.getSubmittedResultTitle().should('not.be.visible')
	})

	it('checking that user should not be able submit form with empty Name', () => {
		form.sendTextToInputName("")
		form.sendTextToInputAlterEgo("  ")

		form.getSubmitButton().should('be.disabled')
		form.getAlertName().should('be.visible')
	})

	it('checking that user should not be able submit form with specific symbols', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			form.sendTextToInputName(data["specificSymbols"])
			form.sendTextToInputAlterEgo(data["specificSymbols"])
			form.getSubmitButton().click()

			form.getSubmittedResultTitle().should('not.be.visible')
		})
	})
})