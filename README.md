# Cypress-Typescript


#disable ssl certs to allow cypress install
 export NODE_TLS_REJECT_UNAUTHORIZED=0

#New version of cypress
npm install -D cypress@12.8.1

Once you installed cypress

Clone this repo and "run npm i" to install all libraries in this repo

Then "run npx cyress open " to launch cypress and execute way2AutomationTC



Test Case: Adding Users to the User List Table

Objective: To test the functionality of adding users to the User List Table on http://www.way2automation.com/angularjs-protractor/webtables/ and ensure that the added users are displayed on the list.

Steps:

Open a web browser and navigate to http://www.way2automation.com/angularjs-protractor/webtables/.
Validate that the page has loaded and you are on the User List Table page.
Click the "Add User" button.
Fill in the following details for the new users:
First Name: FName1
Last Name: LName1
User Name: (generate a unique username for each run, e.g. User1_randomnumber)
Password: Pass1
Customer: Company AAA
Role: Admin
Email: admin@mail.com
Cell: 082555
Click the "Save" button.
Repeat steps 4-5 to add another user with the following details:
First Name: FName2
Last Name: LName2
User Name: (generate a unique username for each run, e.g. User2_randomnumber)
Password: Pass2
Customer: Company BBB
Role: Customer
Email: customer@mail.com
Cell: 083444
Verify that the added users are displayed on the User List Table, with the correct details.
Close the web browser.
Expected Result:

After Step 2, the User List Table page should be displayed.
After Step 5 and 6, the new users should be added to the User List Table.
After Step 7, the added users should be displayed on the User List Table, with the correct details.
Each time the test is run, the User Name (*) for each user should be unique.
Note:

The User List Table may have existing users before running the test. These users should not be affected by the test.
The test case assumes that the "Add User" and "Save" buttons are functioning properly.

