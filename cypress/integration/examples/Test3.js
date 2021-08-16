///<reference types="Cypress" />

describe('My Second Test Suite', function()
{
  it('My Test Case', function()
  {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  //  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
  //  cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('not.have.value', '[for="bmw"]')
  //  cy.get('input[type="checkbox"]').check(['option2', 'option3'])
  //  cy.get('select').select('option2').should('have.value', 'option2')
  //  cy.get('#autocomplete').type('ind')
  //  cy.get('.ui-menu-item div').each(($el, index, $list) =>{
  //    if($el.text()==="India"){
  //      $el.trigger("click")
  //    }
  //  })
  //  cy.get('#autocomplete').should('have.value', 'India')

  //  cy.get('#displayed-text').should('be.visible')
  //  cy.get('#hide-textbox').click()
  //  cy.get('#displayed-text').should('not.be.visible')

  cy.get('[value="radio1"]').check().should('be.checked')
  }
  )  
}
)