class RegistrationPage {
    get nameInput() {
        return $('id=com.example.bloodcardapp:id/name');
    }

    get surnameInput() {
        return $('id=com.example.bloodcardapp:id/surname');
    }

    get bloodTypeInput() {
        return $('id=com.example.bloodcardapp:id/bloodType');
    }

    get genderInputFemale() {
        return $('id=com.example.bloodcardapp:id/genderFemale')
    }

    get emailInput() {
        return $('id=com.example.bloodcardapp:id/email');
    }

    get passwordInput() {
        return $('id=com.example.bloodcardapp:id/passwordET');
    }

    get registerButton() {
        return $('id=com.example.bloodcardapp:id/registerButton');
    }

    get loginPageButton() {
        return $('id=com.example.bloodcardapp:id/returnButton')
    }

    async scrollDown() {
        const { width, height } = await driver.getWindowRect();

        // Set the X coordinate for the scroll element
        const location_x = Math.floor(width * 0.5);

        // Set start and end Y coordinates for the scroll direction (up or down)
        const location_start_y = Math.floor(height * 0.6);
        const location_end_y = Math.floor(height * 0.3);

        // Perform vertical scroll gesture
        await driver.touchAction([
            { action: 'press', x: location_x, y: location_start_y },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: location_x, y: location_end_y },
            { action: 'release' }
        ]);
    }

    async register(name, surname, bloodType, email, password) {
        await this.nameInput.waitForDisplayed();
        await this.nameInput.setValue(name);
        await this.surnameInput.waitForDisplayed();
        await this.surnameInput.setValue(surname);
        await this.bloodTypeInput.waitForDisplayed();
        await this.bloodTypeInput.setValue(bloodType);
        await this.genderInputFemale.waitForDisplayed();
        await this.genderInputFemale.click();
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
        await this.scrollDown()
        await this.registerButton.waitForDisplayed();
        await this.registerButton.click();
    }

}
module.exports = new RegistrationPage();
