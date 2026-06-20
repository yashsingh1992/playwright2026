const{test,expect} = require("@playwright/test");



test("Calendar Validation", async ({page}) =>

    {


        const month = 6;
        const date = "15";
        const year = "2027";

        const expected = [month,date,year];

        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        await page.locator("div.react-date-picker__inputGroup").click();
        await page.locator("button.react-calendar__navigation__label").click();
        await page.locator("button.react-calendar__navigation__label").click();
        await page.getByRole("button",{name:year}).click();
        await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();
        await page.locator("//abbr[text()="+date+"]").click();
        await page.waitForTimeout(5000);

   

    })