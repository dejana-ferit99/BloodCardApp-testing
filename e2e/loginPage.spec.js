const loginPage = require("../screens/loginPage");
const fixture = require('../fixtures/loginData.json');
const { expect } = require('chai');

describe('Login functionalities', () => {
    const data = fixture.loginData;

    beforeEach('Launch the app', async () => {
        await browser.launchApp(); //opens the app
    })

    it('Check if user can log in with valid data', async () => {
        await loginPage.login(data[0].email, data[0].password);
        await browser.pause(5000);
        expect(await loginPage.logoutButton.isDisplayed()).to.be.true;
    });

    it('Check if user can log in with invalid email', async () => {
        await loginPage.login(data[1].email, data[1].password);
        await browser.pause(5000);
        expect(await loginPage.logoutButton.isDisplayed()).to.be.false;
    });

    it('Check if user can log in with without email', async () => {
        await loginPage.login(data[2].email, data[2].password);
        await browser.pause(5000);
        expect(await loginPage.logoutButton.isDisplayed()).to.be.false;
    });

    it('Check if user can log in with invalid password', async () => {
        await loginPage.login(data[3].email, data[3].password);
        await browser.pause(5000);
        expect(await loginPage.logoutButton.isDisplayed()).to.be.false;
    });

    it('Check if user can log in without password', async () => {
        await loginPage.login(data[4].email, data[4].password);
        await browser.pause(5000);
        expect(await loginPage.logoutButton.isDisplayed()).to.be.false;

    });

    it('Check if user can log in with empty fields', async () => {
        await loginPage.login(data[5].email, data[5].password);
        await browser.pause(5000);
        expect(await loginPage.logoutButton.isDisplayed()).to.be.false;
    });

    it('Check if user can redirect to Registration page', async () => {
        await loginPage.registrationPageButton.waitForDisplayed()
        await loginPage.registrationPageButton.click()
        await browser.pause(5000);
        const registrationTitle = await $('id=com.example.bloodcardapp:id/title')
        await registrationTitle.waitForDisplayed();
        const actualTitleText = await registrationTitle.getText();
        const expectedTitleText = 'Hello! Welcom to registration page.';
        expect(actualTitleText).to.equal(expectedTitleText);
    })

});


