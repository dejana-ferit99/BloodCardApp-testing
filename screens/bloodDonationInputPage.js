class BloodDonationInputPage {
    get saveDonationButton() {
        return $('id=com.example.bloodcardapp:id/saveInputButton');
    }
    async saveDonationInput() {
        await this.saveDonationButton.waitForDisplayed();
        await this.saveDonationButton.click();
    }
}
module.exports = new BloodDonationInputPage();