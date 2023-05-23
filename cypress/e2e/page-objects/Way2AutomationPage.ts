/// <reference types='cypress' />
class Way2AutomationPage {

    static AssertUserTable()
{
    return cy.get(".smart-table-header-row");
}

static AddUser()
{
    return cy.get("button[type='add']");
}
static InputFirstName()
{
    return cy.get("input[name='FirstName']");
}
static InputLastName()
{
    return cy.get("input[name='LastName']");
}
static InputUserName()
{
    return cy.get("input[name='UserName']");

}
static InputPassword()
{
    return cy.get("input[name='Password']");

}
static InputEmail()
{
    return cy.get("input[name='Email']");
}
static InputCellPhone()
{
    return cy.get("input[name='Mobilephone']");
}
static SelectRole()
{
    return cy.get("select[name='RoleId']");
    cy.wait(500)
}

static AssertUserNameIsAdded(txt: string)
{
    return cy.contains(txt);
}
static AssertUserNameIsNotOntheTable()
{
    return cy.get("tbody");
}

static CustomerOption(txt: string)
{
    return cy.get("label").contains(txt)
}
}
export default Way2AutomationPage;
