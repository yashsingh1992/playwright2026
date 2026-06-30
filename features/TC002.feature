Feature: Ecommerce Validation

@Sanity
Scenario: Placing an order

Given login to ecommerce2 application with "<username>" and "<password>"
Then Verify error message is displayed


Examples:
|   username                 |   password    |
| yash.singh080892@gmail.com |   Yash@123456 |
| yash.singh080892@gmail.com |   Yash@1234   |
