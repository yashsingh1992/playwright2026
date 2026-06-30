const {expect} = require('@playwright/test');



class LoginPage{


// creating variables in this function which wil store the locator values
// no await is required , as we are nop performing any action 

constructor(page) 
{
   this.page = page;
   this.username = page.getByPlaceholder("email@example.com");
   this.password = page.getByPlaceholder("enter your passsword");
   this.signInButton = page.getByRole("button",{name:'Login'});
   this.incorrect =  page.locator(".toast-container");

}


//creating reusable utility in this function
// await is required as we are performing action here

async validLogin(userName,passWord)

{
   await this.username.type(userName);
   await this.password.type(passWord);
   await this.signInButton.click();
   await this.page.waitForLoadState('networkidle');

}

async goto()
{

   await this.page.goto("https://rahulshettyacademy.com/client/");

}


async verifyIncorrect(){


await expect(this.incorrect).toContainText("Incorrect");


}


}


//exporting this class so that it can be used other place
module.exports = {LoginPage};