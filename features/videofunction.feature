Feature: Mail Online Browser

  Scenario Outline: I need xto login to Mail Online Browser

    Given I am on the browser and load the url <homepage>
    And I Accept cookies
    And I need to click on Play button
    And I should click on Forward button
    And I should click on Backward button
    And I need to click on Mute button
    
    Examples:
    | homepage |
    | https://www.dailymail.co.uk/video/index.html | 