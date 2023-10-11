Feature: Logging in at the automationexercise website

  Scenario Outline: Logging in and deleting account

    Given I am on the login page
    When I login with <email> and <password>.
    # And I delete the account. 

     Examples:
      | username | email        | password | firstName |lastName|company|  adress1|  adress2|  state | city|zipcode|mobileNumber|
      | jensmith | jen@gmail.co | 12345    |  Jen    | smith    |RFT    | London  |London   | Eng    |  London |12345  | 123456789  |

  