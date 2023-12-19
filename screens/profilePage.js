class ProfilePage {
    get enterBloodDonationButton() {
        return $('id=com.example.bloodcardapp:id/inputButton');
    }

    get previousBloodDonationButton() {
        return $('id=com.example.bloodcardapp:id/listButton');
    }

    get logoutButton() {
        return $('id=com.example.bloodcardapp:id/logoutButton');
    }

    async openBloodDonationInput() {
        await this.enterBloodDonationButton.waitForDisplayed();
        await this.enterBloodDonationButton.click();
    }

    async openPreviousDonation() {
        await this.previousBloodDonationButton.waitForDisplayed();
        await this.previousBloodDonationButton.click();
    }

}
module.exports = new ProfilePage();