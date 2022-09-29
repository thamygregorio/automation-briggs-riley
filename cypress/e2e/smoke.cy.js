beforeEach(() => {
  cy.visit('/')
  cy.get('#open-me > a').click()
  cy.get('#password').type('heitto{enter}')
})

// Add to Cart
describe('Cart and Checkout', () => {
  it('Add to cart and enter checkout', () => {
    cy.get('.is-selected > .product-wrap > .relative > a > .image__container > .image-element__wrap > .transition--blur-up').click()
    cy.get('#product_form_1970048434242 > .purchase-details > .purchase-details__buttons > .action_button').click()
    cy.get('.rightMenuWrap > #cartPopup > .icon-cart').click()
    cy.get('#checkout').click()
    cy.get('#checkout_email_or_phone').type('nipy@mailinator.com');
    cy.get('#checkout_shipping_address_country').select('United States');
    cy.get('#checkout_shipping_address_first_name').type('Nipy');
    cy.get('#checkout_shipping_address_last_name').type('Gonzales');
    cy.get('#checkout_shipping_address_address1').type('St. Test, 24');
    cy.get('#checkout_shipping_address_address2').type('23');
    cy.get('#checkout_shipping_address_city').type('Indiana');
    cy.get('#checkout_shipping_address_province').select('IN');
    cy.get('#checkout_shipping_address_zip').type('46032');
    cy.get('.main').click();
  })
})
