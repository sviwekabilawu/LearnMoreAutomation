/// <reference types='cypress' />
class Utility {
    static getBaseUrl(envi) {
        if (envi == 'dev')
            return cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/')
        else if (envi == 'qa')
            return cy.visit('https://www.saucedemo.com/')
           }
}
export default Utility;
