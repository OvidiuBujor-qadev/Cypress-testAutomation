/// <reference types="Cypress" />
import HomePage from '../page-objects/HomePage'
import ProductPage from '../page-objects/ProductPage'
describe('My Second Test Suite', () =>
{
    beforeEach(function()
    {
      cy.fixture('TestFixture1').then(function(data){
        this.data = data
      })
    })

  it('My Test Case', function()
  {
    const homePage = new HomePage()
    
   cy.visit('https://rahulshettyacademy.com/angularpractice/')
   homePage.getEditBox().type(this.data.name)
   homePage.getGender().select(this.data.gender)

   homePage.getTwoWayDataBinding().should('have.value', this.data.name)
   homePage.getEditBox().should('have.attr', 'minlength', '2')

   homePage.getEntrepeneur().should('be.disabled')
  })

   it('Second Test', function(){
     const homEpage = new HomePage
     const productPage = new ProductPage()
    homEpage.getShopTab().click()

    this.data.productName.forEach(function(element){
      cy.selectProduct(element)
    })
    productPage.checkOutButton().click()
  })

  
}
)