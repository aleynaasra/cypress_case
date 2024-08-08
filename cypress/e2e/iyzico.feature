@regression
Feature: Payment Feature
  Scenario: Verify valid payment with debit or credit card
    Given I open the url
    When I click the second product
    And I click the add basket button
    And I click the show basket button
    And I click the go to payment page button
    And I choose debit or credit card option
    And I click the pay with debit or credit card button
    And I fiil the card informations
    And I click the pay button
    Then I check "Sipariş Alındı" text
