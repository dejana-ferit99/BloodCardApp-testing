const loginPage = require("../screens/loginPage");
const registrationPage = require("../screens/registrationPage");
const { expect } = require('chai');
const fixture = require('../fixtures/registrationData.json');

registrationEmail = Math.random().toString(36).substring(2) + "@gmail.com";
invalidEmail = Math.random().toString(36).substring(2);
noEmail = '';
registrationPassword = Math.random().toString(36).substring(2);
invalidPassword = Math.random().toString(36).substring(2, 7);
noPassword = '';


describe('Registration page functionalities', () => {
    const data = fixture.registrationData;

    beforeEach('Launch the app and open registration page', async () => {
        await browser.launchApp();
        const loginButton = await $('id=com.example.bloodcardapp:id/nextButton')
        await loginButton.waitForDisplayed();
        await loginButton.click();
    })
    it('Check if user can register without name', async () => {
        await registrationPage.register(data[0].name, data[0].surname, data[0].bloodType, registrationEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;

    });
    it('Check if user can register without surname', async () => {
        await registrationPage.register(data[1].name, data[1].surname, data[1].bloodType, registrationEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;

    });
    it('Check if user can register without surname', async () => {
        await registrationPage.register(data[1].name, data[1].surname, data[1].bloodType, registrationEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;

    });
    it('Check if user can register without date of birth', async () => {
        await registrationPage.register(data[2].name, data[2].surname, data[2].bloodType, registrationEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;

    });
    it('Check if user can register without blood type', async () => {
        await registrationPage.register(data[3].name, data[3].surname, data[3].bloodType, registrationEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;

    });
    it('Check if user can register without email', async () => {
        await registrationPage.register(data[4].name, data[4].surname, data[4].bloodType, noEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;

    });
    it('Check if user can register with invalid email', async () => {
        await registrationPage.register(data[4].name, data[4].surname, data[4].bloodType, invalidEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;
    });
    it('Check if user can register without password', async () => {
        await registrationPage.register(data[4].name, data[4].surname, data[4].bloodType, registrationEmail, noPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;
    });
    it('Check if user can register with invalid password', async () => {
        await registrationPage.register(data[4].name, data[4].surname, data[4].bloodType, registrationEmail, invalidPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.false;
    });
    it('Check if user can register with valid data', async () => {
        await registrationPage.register(data[4].name, data[4].surname, data[4].bloodType, registrationEmail, registrationPassword);
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        expect(await myProfileTitle.isDisplayed()).to.be.true;
    });
    it.only('Check if user can redirect to login page', async () => {
        await browser.pause(5000);
        await registrationPage.scrollDown();
        await registrationPage.loginPageButton.waitForDisplayed();
        await registrationPage.loginPageButton.click();
        const loginTitle = $('id=com.example.bloodcardapp:id/title')
        await loginTitle.isDisplayed();
        const actualTitleText = await loginTitle.getText();
        const expectedTitleText = 'Hello! Welcom to login page.';
        expect(actualTitleText).to.equal(expectedTitleText);
    })

});