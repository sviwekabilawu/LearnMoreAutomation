import Utility from "../page-objects/utility";
import login from "../page-objects/LoginPage";
import Products from "../page-objects/ProductsPage";

let environment = Cypress.env('qa')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})



describe('Cart', () => {
    it('should add 4 items to the cart', () => {
        Utility.getBaseUrl(environment);
        login.loginHeader(".login_logo").contains("Swag Labs");
        login.enterUsername().type('standard_user');
        login.enterPassword().type('secret_sauce');
        login.clickLoginButton().click();
        cy.url().should('include', '/inventory.html')
        login.loginHeader('.app_logo').contains("Swag Labs");
        login.loginHeader(".title").contains("Products")
        cy.contains("Add to cart").first().click()
        cy.contains("Add to cart").first().click()
        cy.contains("Add to cart").first().click()
        cy.contains("Add to cart").first().click()
        Products.shopping_cart().should('have.text', '4')
    })
})
