

import login from '../page-objects/LoginPage'
import Utility from "../page-objects/utility";
let environment = Cypress.env('qa')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


    it('Testing login page for swag labs', () => {


        cy.fixture(environment + '/testData.json').then((profile) => {
            Utility.getBaseUrl(environment)
            login.loginHeader(".login_logo").contains("Swag Labs");
            login.enterUsername().type(profile.username);
            login.enterPassword().type(profile.password);
            login.clickLoginButton().click();
            cy.url().should('include', '/inventory.html')
            login.loginHeader('.app_logo').contains("Swag Labs");
            login.loginHeader(".title").contains("Products")
            cy.contains("Sauce Labs Backpack").click();
    })
})
describe('Login', () => {
    it('should log in with a valid username and password', () => {
        Utility.getBaseUrl(environment)
        login.loginHeader(".login_logo").contains("Swag Labs");
        login.enterUsername().type('standard_user');
        login.enterPassword().type('secret_sauce');
        login.clickLoginButton().click();
        cy.url().should('include', '/inventory.html')
        login.loginHeader('.app_logo').contains("Swag Labs");
        login.loginHeader(".title").contains("Products")
    })

    it('should not log in with a locked username and password', () => {
        Utility.getBaseUrl(environment)
        login.loginHeader(".login_logo").contains("Swag Labs");
        login.enterUsername().type('locked_out_user')
        login.enterPassword().type('secret_sauce')
        login.clickLoginButton().click();
        login.LoginError().should('be.visible')
    })
})

