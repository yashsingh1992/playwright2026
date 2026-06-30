const { expect } = require('@playwright/test');


class ThankYou{




constructor(page){


  this.thanksMessage = page.getByText("Thankyou for the order.");


}




async verifyMessage(){

    await expect(this.thanksMessage).toBeVisible();


}


}

module.exports = {ThankYou};