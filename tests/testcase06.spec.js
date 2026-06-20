const{test,expect} = require("@playwright/test");



test("pop up and iframe interaction", async ({page}) =>

    {


        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        page.on('dialog', dialog => dialog.accept()); // help in listening event
        await page.locator("#confirmbtn").click();
        await page.locator("#mousehover").hover();
        const frame = await page.frameLocator("#courses-iframe");
        await frame.locator("[href*='lifetime-access'][class='new-navbar-highlighter']").click();
        const text = await frame.locator(".text h2 span").textContent();
        console.log(text);
        await page.waitForTimeout(6000);


})