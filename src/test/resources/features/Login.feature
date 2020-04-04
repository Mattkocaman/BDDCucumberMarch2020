@web

  Feature: Login feature

    Background:
      Given I am on facebook login page


      @login
      Scenario Outline: Verify invalid login with multiple usernames
        When I enter <username> into username text fields on homescreen
        And I enter <password> into password text fields on homescreen
        And I click on login button on home page
        Then I verify invalid login message

        Examples:
          |       username        |   password   |
          |alparen@panda.colomb   | pandamambaboi|
          |birsaqbaba@babus.net   | oyunreis5678 |
          |hamdireis@bogazici.edu |  bogazkilic  |