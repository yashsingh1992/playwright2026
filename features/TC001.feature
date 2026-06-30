Feature: Ecommerce Validation

@Regression
Scenario: Placing an order

Given login to ecommerce application with "yash.singh080892@gmail.com" and "Yash@1234"
When add product to cart
Then verify product is visible in the cart
When enter valid details and place the order
Then Verify order is placed

