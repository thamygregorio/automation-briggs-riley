import { faker } from '@faker-js/faker';

beforeEach(() => {
  cy.visit('/')
})

// Add to Cart
describe('Cart and Checkout', () => {
  it('Add to cart and enter checkout', () => {
    cy.get('.is-selected > .product-wrap > .relative > a > .image__container > .image-element__wrap > .transition--blur-up').click()
    cy.get('#quantity-6785118240810').clear().type("2")
    cy.get('#product_form_6785118240810 > .product-monogram-box > .swatch_options > .swatch > fieldset > .olive-swatch > label')
    cy.get('#product_form_6785118240810 > .purchase-details > .purchase-details__buttons > .action_button').click()
    cy.wait(3000)
    cy.get('.rightMenuWrap > #cartPopup > .icon-cart').click()
    cy.get('#checkout').click()
    cy.get('#checkout_email').type(faker.internet.email());
    cy.get('#checkout_shipping_address_first_name').type(faker.name.firstName());
    cy.get('#checkout_shipping_address_last_name').type(faker.name.lastName());
    cy.get('#checkout_shipping_address_address1').type(faker.address.streetName());
    cy.get('#checkout_shipping_address_address2').type(faker.address.secondaryAddress());
    cy.get('#checkout_shipping_address_city').type(faker.address.cityName());
    cy.get('#checkout_shipping_address_province').select('NY');
    cy.get('#checkout_shipping_address_zip').type('10041');
    cy.get('#checkout_shipping_address_phone').type('212-277-8422');
    cy.get('#checkout_buyer_accepts_sms').check();
    cy.get('#continue_button').click();
    cy.get('#checkout_shipping_rate_id_shopify-free20ground20shipping20on20orders20over2099-0_00').should("be.visible").check();
    cy.get('#continue_button').should("be.visible").click();
    cy.get('#checkout_different_billing_address_false').should("be.visible").click()
    cy.get('#checkout_remember_me').should("be.visible").check();
  })
})
