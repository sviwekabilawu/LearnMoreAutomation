/// <reference types='cypress' />
class loginPage {

    static enterUsername() {
        return cy.get("#user-name")
    }

    static enterPassword() {
        return cy.get("#password")
    }

    static clickOnLogin() {
        return cy.get("Login")
    }

    static loginHeader(header: string) {
        return cy.get(header)
    }
    static clickLoginButton(){
        return cy.get("#login-button")
    }

    static LoginError(){
        return cy.get(".error-button")
    }

}
export default loginPage;
