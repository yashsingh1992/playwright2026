const {LoginPage} = require('./loginPage');
const {Dashboard} = require('./dashboard');
const {CartPage} = require('./cartPage');
const {OrderDetails} = require('./orderDetailPage');
const {ThankYou} = require('./thankYouPage');

class POManager{




constructor(page){

this.loginPage = new LoginPage(page);
this.dashboard = new Dashboard(page);
this.cart = new CartPage(page);
this.orderDetails = new OrderDetails(page);
this.thankYou = new ThankYou(page);


}

getLoginPage(){

return this.loginPage;

}

getDashboardPage(){

return this.dashboard;

}

getCartPage(){

return this.cart;

}


getOrderDetailsPage(){


return this.orderDetails;

}

getThankYouPage(){


return this.thankYou;

}


}

module.exports={POManager};