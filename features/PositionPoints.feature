Feature: I need to Visit Dailyail page

  Scenario Outline: Test the Position and Points of Premium laegue table

    Given I am on the browser and load the url <homepage>
    And I Accept cookies
    And I need to click on Sport Tab
    When I need to click on column tab
    When I search for the points of the team "Liverpool"
    
    Examples:
    | homepage |
    | https://www.dailymail.co.uk | 