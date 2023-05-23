

import userTable from '../page-objects/Way2AutomationPage'
import Utility from "../page-objects/utility";
let environment = Cypress.env('dev')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


it('Test case to Add User scenario one', () => {


    cy.fixture(environment + '/testData.json').then((profile) => {
        Utility.getBaseUrl(environment)
        userTable.AssertUserTable().contains("First Name");
        userTable.AssertUserTable().contains("Last Name");
        userTable.AddUser().click();
        userTable.InputFirstName().type(profile[0].FirstName);
        userTable.InputLastName().type(profile[0].LastName);
        userTable.InputUserName().type(profile[0].UserName);
        userTable.InputPassword().type(profile[0].Password);
        userTable.CustomerOption(profile[0].Customer).click()
        userTable.SelectRole().select(profile[0].Role)
        userTable.InputEmail().type(profile[0].Email);
        userTable.InputCellPhone().type(profile[0].Cell);
        userTable.AssertUserNameIsAdded("Save").click();
        userTable.AssertUserNameIsAdded(profile[0].UserName)
    })
})

it('Test case to Add User scenario two', () => {


    cy.fixture(environment + '/testData.json').then((profile) => {
        Utility.getBaseUrl(environment)
        userTable.AssertUserTable().contains("First Name");
        userTable.AssertUserTable().contains("Last Name");
        userTable.AddUser().click();
        userTable.InputFirstName().type(profile[1].FirstName);
        userTable.InputLastName().type(profile[1].LastName);
        userTable.InputUserName().type(profile[1].UserName);
        userTable.InputPassword().type(profile[1].Password);
        userTable.CustomerOption(profile[1].Customer).click()
        userTable.SelectRole().select(profile[1].Role)
        userTable.InputEmail().type(profile[1].Email);
        userTable.InputCellPhone().type(profile[1].Cell);
        userTable.AssertUserNameIsAdded("Save").click();
        userTable.AssertUserNameIsAdded(profile[1].UserName)
    })
})
