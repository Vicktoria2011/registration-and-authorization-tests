describe('Registration', () => {

    it('Test', () => {
    
      cy.visit('https://automationteststore.com/', { timeout: 10000 });
    
      cy.get('#customer_menu_top').click();
      cy.get('[class="fa fa-check fa"]').click();
      cy.get('#AccountFrm_firstname').type('test_firstname');
      cy.get('#AccountFrm_lastname').type('test_lastname');
      cy.get('#AccountFrm_email').type('zvitnev@ukr.net');
      cy.get('#AccountFrm_telephone').type('+380665460563');
      cy.get('#AccountFrm_address_1').type('Geroev Maydanu, 53');
      cy.get('#AccountFrm_country_id').select('Ukraine');
      cy.get('#AccountFrm_postcode').type('61000');
      cy.get('#AccountFrm_zone_id').select('Chernivtsi');
      cy.get('#AccountFrm_city').type('Chernivtsi');
      cy.get('#AccountFrm_loginname').type('Victoria');
      cy.get('#AccountFrm_password').type('123456');
      cy.get('#AccountFrm_confirm').type('123456');
      cy.get('[class="fa fa-check"]').click();
      cy.get('#AccountFrm_agree').check();
    
        
      })
    })
    
    describe('Log in', () => {
    
      it('Test', () => {
        cy.visit('https://automationteststore.com/', { timeout: 10000 });
    
      cy.get('#customer_menu_top').click();    
      cy.get('#loginFrm_loginname').type('Victoria');
      cy.get('#loginFrm_password').type('123456');
      cy.get('button.btn.btn-orange.pull-right:contains("Login")').click();
    
      })
      })
