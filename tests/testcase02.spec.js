const {test, expect} = require('@playwright/test');



test('login client with multiple webelements with one attribute', async ({ page }) =>
    {
    
    //page directly we dont have to load any data or cookies

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("input#userEmail").fill("anshika@gmail.com");
    await page.locator("input#userPassword").fill("Iamking@000");
    await page.locator("input#login").click();
    await page.waitForTimeout(10000);
 //   await page.waitForLoadState('networkidle'); - flaky command
 //   await page.locator("div.card-body b").waitFor(); - will work if returning one element
    await page.locator("div.card-body b").first().waitFor();
    const allTitles = await page.locator("div.card-body b").allTextContents();
    console.log(allTitles);
   
    });


    
test('dropdown handling and radio button handling', async ({ page }) =>
    {
    
    //page directly we dont have to load any data or cookies

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("Consultant");
    await page.locator("span.checkmark").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator("span.checkmark").last()).toBeChecked();
    await page.waitForTimeout(5000);

    });




    


