const {test, expect} = require('@playwright/test');

async function maximizeWindow(page) {
  const cdp = await page.context().newCDPSession(page);
  const { windowId } = await cdp.send('Browser.getWindowForTarget');
  await cdp.send('Browser.setWindowBounds', {
    windowId,
    bounds: { windowState: 'maximized' },
  });
}

test('browser existing cookies required', async ({ browser }) =>
{

   //new chrome instance 

   const context = await browser.newContext({ viewport: null });
   const page = await context.newPage();
   await maximizeWindow(page);
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator("input#username").fill("rahulshetty");
   await page.locator("input#password").fill("test123");
   await page.locator("input#signInBtn").click();
   //playwright smartly wait for the error message to display
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText("Incorrect");
   await page.waitForTimeout(10000);
  
});


test('No browser existing cookies required', async ({ page }) =>
    {
    
       //new chrome instance 
       await page.goto("https://google.com");
       await console.log(await page.title());
       await expect(page).toHaveTitle("Google");
       await page.waitForTimeout(10000);
      
    });


    test('multiple web elements in page', async ({ browser }) =>
      {
      
         //new chrome instance 
      
         const context = await browser.newContext({ viewport: null });
         const page = await context.newPage();
         await maximizeWindow(page);
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         const userName = page.locator("input#username");
         const password = page.locator("input#password");
         const signButton = page.locator("input#signInBtn");
         await userName.fill("rahulshettyacademy");
         await password.fill("Learning@830$3mK2");
         await signButton.click();
    //     console.log(await page.locator("div.card-body h4 a").nth(0).textContent());
         const allTitles = await page.locator("div.card-body h4 a").allTextContents();
         console.log(allTitles);
         await page.waitForTimeout(10000);
        
      });
