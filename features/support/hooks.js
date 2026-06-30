// @ts-check

const {After, Before, AfterStep, Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const {POManager} = require('../../page-objects/POManager');
const { chromium } = require('@playwright/test'); 




// Synchronous
Before(async function () {
 
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();  
    this.poManager = new POManager(this.page); 

});


AfterStep(async function({result}){

    if(result.status == Status.FAILED)
    {
        await this.page.screenshot({path:'/test-result'})

    }

});


// Asynchronous Promise
After(function () {
  
    console.log("Browser Quit");

});