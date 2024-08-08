import { Given, When, And, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'


Given('I open the url', () => {
    cy.visit("https://www.iyzico.com/demo/")
  })

When ('I check the title', () => {
    cy.title().should('eq',"kolay butik")
  })

And ('I click second product', () => {
    cy.get('//h2[contains(text(),\'Serenity Kadın Ayakkabı\')]').click()
    })

And ('I click add basket button', () => {
  cy.get('input[name=add-to-cart]').click()
})

And ('I check if product has been added succefully')
cy.title().should('include','Sepeti görüntüle “Serenity Kadın Ayakkabı” sepetinize eklendi.')

And ('I click show basket button', () => {
    cy.get('button wc-forward').click()
  })

And ('I click go to payment page button', () => {
  cy.get('checkout-button button alt wc-forward').click()

})

And ('I click go to payment page button', () => {
  cy.get('checkout-button button alt wc-forward').click()

})

And ('I choose debit or credit card option', () => {
  cy.get('#payment_method_iyzico').click()

})

And ('I click Pay with credit or debit card button', () => {
  cy.get('#place_order').click()

})

And ('I fiil the card infos', () => {
  cy.get('#ccname').type('Asra Başalan')
  cy.get('input[name="cardNumber"]').type('5526080000000006')
  cy.get('#ccexp').type('01/27')
  cy.get('#cccvc').type('777')
})
  
And ('I click the Pay button', () => {
  cy.get('#iyz-payment-button').click()

})

Then('I should see payment completed mesasage', () => {
  cy.get('.page-title').should('eq',"Sipariş alındı")
  
})
