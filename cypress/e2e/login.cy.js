import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Login Journeys', () => {
  context('navigate to base page before each test', function () {
    beforeEach(function () {
      cy.visit(new LoginPage().pageUrl);
    })

    
    /* happy path: valid username and a valid password */
    it('As a Swag Labs user, I can log into the web app with a valid username and a valid password ', () => {
      const login = new LoginPage();
      const inventory = new InventoryPage();

      //login.navigate();
      login.enterUsername('standard_user');
      login.enterPassword('secret_sauce');
      login.clickLoginButton();

      inventory.checkPageURL();

      //cy.pause();
    })

    /* invalid username and a valid password */

    it('As a Swag Labs user, I cannot log into the web app with a invalid username and a valid password ', () => {
      const login = new LoginPage();
      //login.navigate();
      login.enterUsername('invalid_user');
      login.enterPassword('secret_sauce');
      login.clickLoginButton();

      //cy.pause();
    })

    //   /* valid username and an invalid password */
    //   it('As a Swag Labs user, cannot log into the web app with a valid username and an invalid password ', () => {

    //     const login = new LoginPage();
    //     //login.navigate();
    //     login.enterUsername("standard_user");
    //     login.enterPassword("bad_sauce");
    //     login.clickLoginButton();
    //     //cy.pause();

    //     })
  })
})
