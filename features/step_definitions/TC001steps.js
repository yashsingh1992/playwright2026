const assert = require('assert');
const { When, Then, Given, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
const {POManager} = require('../../page-objects/POManager');
const {test, expect, playwright} = require('@playwright/test');
const { chromium } = require('@playwright/test');





Given('login to ecommerce application with {string} and {string}', async function (username, password) {

   
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.validLogin(username,password);

});

When('add product to cart', async function () {
  
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.addToCart();
});

Then('verify product is visible in the cart', async function () {
 
        const cartPage = this.poManager.getCartPage();
        await cartPage.verifyCart();
      
});

When('enter valid details and place the order', async function () {

  const orderDetails = this.poManager.getOrderDetailsPage();
  await orderDetails.fillDetails();

});

Then('Verify order is placed', async function () {
  
  const thanks = this.poManager.getThankYouPage();
  await thanks.verifyMessage();


});