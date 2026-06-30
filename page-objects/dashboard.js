class Dashboard{



constructor(page){


 this.add = page.locator("div.card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add to Cart"});
 this.cart = page.locator("[routerlink*='/dashboard/cart']");



}


async addToCart(){

await this.add.click();
await this.cart.click();



}



}

module.exports = {Dashboard};
