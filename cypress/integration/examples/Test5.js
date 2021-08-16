///<reference types="Cypress" />

describe('My Second Test Suite', function()
{
  it('My Test Case', function()
  {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
  {
    const text = $el.text()
    if(text.includes('Python')){
      cy.get('tr td:nth-child(2)').eq(index).next().then((price) =>
      {
        const priceText = price.text()
        expect(priceText).to.equal('25')
      }
      )
    }
  })
  
  }
  )  
}
)