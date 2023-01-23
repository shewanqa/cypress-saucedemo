class LoginPage{

    pageUrl = "https://www.saucedemo.com/";
    usernameInputId = "#user-name";
    passwordInputId = "#password";
    loginBtnId = "#login-button";

    navigate(){
        cy.visit(this.pageUrl);
    }

    enterUsername(username){
        cy.get(this.usernameInputId).type(username);
    }

    enterPassword(password){
        cy.get(this.passwordInputId).type(password);
    }

    clickLoginButton(){
        cy.get(this.loginBtnId).click();
    }
}
export default LoginPage