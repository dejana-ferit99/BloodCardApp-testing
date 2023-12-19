class LoginPage {
    get emailInput() {
        return $('id=com.example.bloodcardapp:id/email');
    }

    get passwordInput() {
        return $('id=com.example.bloodcardapp:id/passwordET');
    }

    get loginButton() {
        return $('id=com.example.bloodcardapp:id/loginButton');
    }

    get logoutButton() {
        return $('id=com.example.bloodcardapp:id/logoutButton');
    }

    async login(email, password) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);

        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();

    }

    get registrationPageButton() {
        return $('id=com.example.bloodcardapp:id/nextButton');
    }
}

module.exports = new LoginPage();