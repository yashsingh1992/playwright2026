const {test, expect} = require('@playwright/test');

async function maximizeWindow(page) {
    const cdp = await page.context().newCDPSession(page);
    const { windowId } = await cdp.send('Browser.getWindowForTarget');
    await cdp.send('Browser.setWindowBounds', {
      windowId,
      bounds: { windowState: 'maximized' },
    });
  }



test('child windows handling', async ({ browser }) =>


    {
    
        const context = await browser.newContext({ viewport: null });
        const page = await context.newPage();
        await maximizeWindow(page);
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

       const [newPage] = await Promise.all(        
            [
            context.waitForEvent('page'), //listen for any new page (pending, rejected and fulfilled)
            await page.locator("[href*='documents-request']").click()
            ]
            )


     //   console.log(await newPage.locator("[class='im-para red']").textContent());
        const text = await newPage.locator("[class='im-para red']").textContent();
        const arrayText = text.split("@");
        const arrayText2 = arrayText[1].split(" ");
        console.log(arrayText2[0]);

            
    });