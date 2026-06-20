const {test, expect} = require('@playwright/test');

async function maximizeWindow(page) {
  const cdp = await page.context().newCDPSession(page);
  const { windowId } = await cdp.send('Browser.getWindowForTarget');
  await cdp.send('Browser.setWindowBounds', {
    windowId,
    bounds: { windowState: 'maximized' },
  });
}


  test('find out element from dynamic list', async ({ browser }) => {

    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();
    await maximizeWindow(page);
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByPlaceholder("email@example.com").fill("anshika@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    await page.getByRole("button",{name:'Login'}).click();
    await page.waitForLoadState('networkidle');



    await page.locator("div.card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add to Cart"}).click();
  
    // const count = await page.locator("div.card-body b").count();
    // console.log("Total cards found: " + count);
  
    // // for (let i = 0; i < count; i++) {
  
    // //   // ✅ Fix 1: await added to resolve textContent Promise
    // //   const productName = await page.locator("div.card-body b").nth(i).textContent();
    // //   console.log("Product: " + productName);
  
    // //   if (productName === "ZARA COAT 3") {
  
    // //     // ✅ Fix 2: await added to console.log
    // //     console.log("Found product: " + productName);
  
    // //     // ✅ Fix 3: .click() added to actually click the button
    // //     await page.locator("div.card-body").nth(i).locator("button:has-text('Add To Cart')").click();
    // //     break; // ✅ Fix 4: stop loop once item is found
    // //   }
    // // }

    await page.locator("[routerlink*='/dashboard/cart']").click();
   // const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    //expect(bool).toBeTruthy();
    //console.log(bool);



    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   // await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
    await page.locator("text=Checkout").click();
    await expect(page.locator(".user__name [type='text']").first()).toHaveText("anshika@gmail.com");

// auto suggestive dropdown


    await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
    const options = page.locator(".ta-results button");
    await options.first().waitFor();
    const optionCount = await page.locator(".ta-results button").count();
    console.log("Option count: " + optionCount);
    for (let i=0; i<optionCount; i++){


      const value = await options.nth(i).textContent();
      console.log("Option [" + i + "]: '" + value + "'");
      if (value === " India")
      {
        console.log("Matched at index: " + i);
        await options.nth(i).click();
        break;
      }


    }

    
    await page.locator(".action__submit ").click();
    const match = await page.locator(".hero-primary").textContent();
    console.log(match);
    expect(await page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
    console.log("Text Matched 1")
    const orderID=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.locator('tbody tr').first().waitFor();
    const rowLocator = page.locator('tbody tr');
    const rows = await rowLocator.count();
    console.log(rows);

    for (let i=0; i<rows; i++){


      const matchID = await rowLocator.nth(i).locator("th").textContent();

      if (orderID.includes(matchID)){

        await rowLocator.nth(i).locator("button").first().click();
        break;
      }


    }





  });
 

  
