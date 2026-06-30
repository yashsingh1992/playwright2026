const { expect } = require('@playwright/test');

class CartPage{



constructor(page){

  
    this.product = page.getByText("ZARA COAT 3");
    this.checkout = page.locator("text=Checkout");

}


async verifyCart(){

    await expect(this.product).toBeVisible();
    await this.checkout.click();


}



}

module.exports = {CartPage};