Feature: Api Testing of automationexercise website

  Scenario Outline: Sending and verifying GET request.

    Given I send the GET request at url.
    Examples: 
    |url|
    | automationexercise.com/api/productsList |

  Scenario Outline: Sending Post request and validation.
    Given I send the post request and validate it.
  