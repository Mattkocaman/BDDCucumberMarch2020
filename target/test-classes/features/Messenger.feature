@web


  Feature: Messenger page feature

    Background:
      Given I am on messenger page

      @messenger
      Scenario: Verify invalid login from messenger page
        When I enter alperen@pand.com into username field on the messenger page
        And I enter cookiemonster543 into password field on the messenger page
        And I click on login button on messenger page
        Then I verify invalid login message on sing in page