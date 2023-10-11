Feature: Adding blue products in cart at automationexercise website
  Scenario Outline: Adding Blue Products.

    Given I am on the login page
    When I login with <email> and <password>.
    When I add all the blue products to cart.
    And I check that all added products are blue.
    And I delete the account.

    Examples:
      | username | email        | password | firstName |lastName|company|  adress1|  adress2|  state | city|zipcode|mobileNumber|
      | jensmith | jen@gmail.co | 12345    |  Jen    | smith    |RFT    | London  |London   | Eng    |  London |12345  | 123456789  |

    Scenario Outline: Deleting Account

    # Given I am on the login page
    # When I login with <email> and <password>.
    # And I delete the account. 

     Examples:
      | username | email        | password | firstName |lastName|company|  adress1|  adress2|  state | city|zipcode|mobileNumber|
      | jensmith | jen@gmail.co | 12345    |  Jen    | smith    |RFT    | London  |London   | Eng    |  London |12345  | 123456789  |