import Utility from "../page-objects/utility";
import login from "../page-objects/LoginPage";
import Products from "../page-objects/ProductsPage";

let environment = Cypress.env('qa')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Filter', () => {
    it('should display items in ascending order of price', () => {
        Utility.getBaseUrl(environment);
        login.loginHeader(".login_logo").contains("Swag Labs");
        login.enterUsername().type('standard_user');
        login.enterPassword().type('secret_sauce');
        login.clickLoginButton().click();
        cy.url().should('include', '/inventory.html');
        login.loginHeader('.app_logo').contains("Swag Labs");
        login.loginHeader(".title").contains("Products")
        Products.filter().select('Price (low to high)');
        Products.item_price().then(($list) => {
            $list.each((index, $el) => {
                if (index < $list.length - 1) {
                    const price = parseFloat($el.innerText.replace('$', ''));
                    const nextPrice = parseFloat($list[index + 1].innerText.replace('$', ''));
                    expect(price).to.be.lte(nextPrice);
                }
            });
        });
    });
});

