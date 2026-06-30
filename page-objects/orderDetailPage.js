class OrderDetails{




constructor(page){


    this.email = page.locator(".user__name [type='text']").first();
    this.country = page.locator("[placeholder='Select Country']");
    this.countryValue = page.getByRole("button",{name:"India"}).nth(1);
    this.placeOrder = page.getByText("PLACE ORDER");


}


// async verifyemail(){

//     await expect(this.email).toHaveText("yash.singh080892@gmail.com");

// }

async fillDetails(){

    await this.country.pressSequentially("Ind");
    await this.countryValue.click();
    await this.placeOrder.click();

}


}

module.exports = {OrderDetails};