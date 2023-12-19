const loginPage = require("../screens/loginPage");
const profilePage = require("../screens/profilePage");
const bloodDonationInputPage = require("../screens/bloodDonationInputPage")
const fixture = require('../fixtures/loginData.json');
const { expect } = require('chai');

describe('Profile page functionalities', () => {
    const data = fixture.loginData;

    beforeEach('Launch the app and log in ', async () => {
        await browser.launchApp();
        await loginPage.login(data[0].email, data[0].password);
        await browser.pause(5000);
        expect(await loginPage.logoutButton.isDisplayed()).to.be.true;
    })
    it('Check if user can enter new blood donation', async () => {
        await profilePage.openBloodDonationInput();
        await bloodDonationInputPage.saveDonationInput();
        await browser.pause(5000);
        const myProfileTitle = await $('id=com.example.bloodcardapp:id/titleMyProfile')
        await myProfileTitle.waitForDisplayed();
        expect(await myProfileTitle.isDisplayed()).to.be.true;
    })
    it('Check if user can see previous blood donations', async () => {
        await profilePage.openPreviousDonation();
        await browser.pause(5000);
        const listOfPreviousBloodDonationsTitle = await $('id=com.example.bloodcardapp:id/titleList')
        expect(await listOfPreviousBloodDonationsTitle.isDisplayed()).to.be.true;
    })
    it.only('Check if user can logout', async () => {
        await profilePage.logoutButton.waitForDisplayed();
        await profilePage.logoutButton.click();
        await browser.pause(5000);
        const loginTitle = $('id=com.example.bloodcardapp:id/title')
        await loginTitle.isDisplayed();
        const actualTitleText = await loginTitle.getText();
        const expectedTitleText = 'Hello! Welcom to login page.';
        expect(actualTitleText).to.equal(expectedTitleText);
    })
});