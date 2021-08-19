/// <reference types="Cypress" />

var expect = chai.expect;

describe('My First Test Suite', function()
{
  it('My First Test Case', function()
  {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(500)
  //    cy.get('.products').find('.product').invoke('val').then(
  //      ($product)=>{
  //        const Hero = $product.txt
  //        cy.log(Hero)
          //expect($product).to.startWith("ca", 0)
  //      }
  //    )
      //cy.get('.products').find('.product').eq(2).invoke('text').then(
      //  ($product)=>{
      //    cy.log($product)
      //  }
      //)
      cy.get('.products').as('productlocator')
      cy.get('@productlocator').find('.product').each(($el, index, $list) => {
       const textVeg = $el.find('h4.product-name').text()
       if(textVeg.includes('Cashews'))
       {
         $el.find('button').trigger("click")
       }
      }
      )
      cy.get('.brand').then((logoelement)=>
      {
        cy.log(logoelement.text())
      })
      //    cy.log(logo.text())
  //    cy.get(':nth-child(3) > .product-action > button').click() 

  }
  )  
}
)