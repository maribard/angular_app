/// <reference types="cypress" />
import { stepper } from "../pages/stepperPage.cy"


describe('stepper tests', () => {
	beforeEach(() => {
		stepper.visit()
	})

	it('typing and displaying data in stepper', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["stepperName"])
			stepper.getButtonNext().click()

			stepper.getInputAddress(data["stepperAddress"])
			stepper.getButtonNextAd().click()

			stepper.getNameInfo().should('have.text', " Name: " + data["stepperName"] + " ")
			stepper.getAddresssInfo().should('have.text', " Address: " + data["stepperAddress"] + " ")
		})
	})

	it('dynamic activation of stepheaders in stepper', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.checkFirstState()

			stepper.getInputName(data["stepperName"])
			stepper.getButtonNext().click()
			stepper.checkSecondState()

			stepper.getInputAddress(data["stepperAddress"])
			stepper.getButtonNextAd().click()
			stepper.checkThirdState()
		})
	})

	it('triming Name and Address', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["stepperNameWithSpaces"])
			stepper.getButtonNext().click()
			stepper.getInputAddress(data["stepperAddressWithSpaces"])
			stepper.getButtonNextAd().click()

			stepper.getNameInfo().should('have.text', " Name: " + data["stepperName"] + " ")
			stepper.getAddresssInfo().should('have.text', " Address: " + data["stepperAddress"] + " ")
		})
	})

	it('typing long Name', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["stepperNameLongOne"])
			stepper.getLengthAlert()
				.should('be.visible')
				.and('have.text', ' The maximum length for this field is 20 characters. ')
			stepper.getButtonNext().click()
			stepper.getLengthAlert()
				.should('be.visible')
				.and('have.text', ' The maximum length for this field is 20 characters. ')
		})
	})

	it('typing long Address', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["stepperName"])
			stepper.getButtonNext().click()
			stepper.getInputAddress(data["stepperAddressLongOne"])
			stepper.getLengthAlert()
				.should('be.visible')
				.and('have.text', ' The maximum length for this field is 30 characters. ')
			stepper.getButtonNextAd().click()
			stepper.getLengthAlert()
				.should('be.visible')
				.and('have.text', ' The maximum length for this field is 30 characters. ')
		})
	})

	it('typing Name as space', () => {
		stepper.getInputName(" ")
		stepper.getButtonNext().click()
		stepper.getFirstIconState()
			.should('be.visible')
			.and('have.text', '1')
	})

	it('typing Address as space', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["stepperName"])
			stepper.getButtonNext().click()

			stepper.getInputAddress(" ")
			stepper.getButtonNextAd().click()

			stepper.getSecondIconState()
				.should('be.visible')
				.and('have.text', '2')
		})
	})

	it('checking that user should not be able go to next step with empty Name', () => {
		stepper.getButtonNext().click()
		stepper.getFirstIconState()
			.should('be.visible')
			.and('have.text', '1')
	})

	it('checking that user should not be able go to next step with empty Address', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["stepperName"])
			stepper.getButtonNext().click()
			stepper.getButtonNextAd().click()
			stepper.getSecondIconState()
				.should('be.visible')
				.and('have.text', '2')
		})
	})

	it('checking that user should not be able go to next step with specific symbols in Name', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["specificSymbols"])
			stepper.getButtonNext().click()
			stepper.getFirstIconState()
				.should('be.visible')
				.and('have.text', '1')
		})
	})

	it.only('checking that user should not be able go to next step with specific symbols in Address', () => {
		cy.fixture('dataForTextBox.json').then((data) => {
			stepper.getInputName(data["stepperName"])
			stepper.getButtonNext().click()

			stepper.getInputAddress(data["specificSymbols"])
			stepper.getButtonNextAd().click()
			stepper.getSecondIconState()
				.should('be.visible')
				.and('have.text', '2')
		})
	})
})