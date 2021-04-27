# PizzaOrder

This is automation solution for pizza order

# Requirements

Node JS packege installed:

https://nodejs.org/en/


# Execution

To execute, after clone project, execute follow commands in main project folder:

*webdriver-manager start*

Open another console and execute follow command to execute tests:

*protractor conf.js*


As we don't have access to the database to delete test data, don't forget to update below fields with new address after each new test execution:

neworder.spec.js file in lines 16 and 18

statusPage.po.js file in lines 7, 11 and 15
