Feature: Signing Up of the automationexercise website

  Scenario Outline: Signing Up

    Given I am on the login page
    When I signup with <username>, <email> and <password>.
    When I enter address information <firstName>, <lastName>, <company>,<adress1>,<adress2>,<state>,<city>,<zipcode> and <mobileNumber>.
  
     Examples:
      | username | email        | password | firstName |lastName|company|  adress1|  adress2|  state | city|zipcode|mobileNumber|
      | jensmith | jen@gmail.co | 12345    |  Jen    | smith    |RFT    | London  |London   | Eng    |  London |12345  | 123456789  |

  