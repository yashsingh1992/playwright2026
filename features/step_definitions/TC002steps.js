const assert = require('assert');
const { When, Then, Given, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
const {POManager} = require('../../page-objects/POManager');
const {test, expect, playwright} = require('@playwright/test');
const { chromium } = require('@playwright/test');




Given('login to ecommerce2 application with {string} and {string}', async function (username, password) {
  
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goto();
    await this.loginPage.validLogin(username,password);


});

Then('Verify error message is displayed', async function () {

   
   await this.loginPage.verifyIncorrect();

});