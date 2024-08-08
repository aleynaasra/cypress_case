# IYZICO TEST CASE WITH CYPRESS 
Iyzico test automation test case was written with Cypress and Cucumber framework. BDD was used. It was aimed to work with Tag.A reporter has been added to the project to view the test results.Gherkin style scenario added to feature file. Test steps added to steps.js file.

1. Initialize node project and install cypress
```
npm init -y
npm install cypress --save-dev
npx cypress open
```
2. Install packages
```
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
```

3. How to run 
```
npx cypress open

```
3. How to run with tag
```
npx cypress run --env tags="@regression"

```