///<reference types="Cypress" />

describe('My Second Test Suite', function()
{
  it('My Test Case', function()
  {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get('#alertbtn').click()
  cy.get('[value="Confirm"]').click()
  cy.on('window:alert', (str)=>{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
  }
  )

  cy.get('#opentab').invoke('removeAttr','target').click()
  cy.url().should('include','shetty')
  cy.go('back')
  
  }
  )  
}
)