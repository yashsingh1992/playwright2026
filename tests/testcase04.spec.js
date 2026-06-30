const {test, expect} = require('@playwright/test');

async function maximizeWindow(page) {
  const cdp = await page.context().newCDPSession(page);
  const { windowId } = await cdp.send('Browser.getWindowForTarget');
  await cdp.send('Browser.setWindowBounds', {
    windowId,
    bounds: { windowState: 'maximized' },
  });
}

test('@Sanity playwright recommended locator', async ({ page }) =>
{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByPlaceholder("Password").fill("Password");
    await page.getByRole("button",{name: 'Submit'}).click();
    await page.getByText("The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name:'Shop'}).click(); 
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add'}).click();
    await page.waitForTimeout(10000);

});
