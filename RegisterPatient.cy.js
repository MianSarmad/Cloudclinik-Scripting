describe('Login Test', () => {
    beforeEach(() => {
    cy.viewport(1920, 1080); // 💡 Full HD resolution
  });

  it('should login successfully with valid credentials', () => {
    // Step 1: Visit the login page
    cy.visit('https://reactstaging.cloudclinik.com/web/cloudclinik/cc-login');

    // Step 2: Enter username and password
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_login"]').type('asad.ali');    
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_password"]').type('infogistic1');

    // Step 3: Click on login button
    cy.get('.btn.login-btn.linear-gradient-btn.btn-primary').click();
    //Select clinic
    cy.get('.ui-selectonemenu-trigger').click();
    // //wait
    // cy.wait(2000)
    //click on selected 
    cy.get('[data-label="Dr Asad Ali Clinic"]').click()
    //Start Announcement
    cy.get('.row > .d-flex > .me-4').click();

    //Register patient tab
    cy.get('.lower-nav > :nth-child(3) > a').click();

    //First Name
    cy.get('[name="firstName"]').type('TestUser');

    //Last Name
    cy.get('[name="lastName"]').type('One');

    //age
    cy.get('[name="age"]').type('25');

    //Cell phone
    cy.get('[name="mobileNo"]').type('03203219393');

    //proceed
    cy.get(':nth-child(9) > .row > .d-flex > .myBtn').click();

    //Existing Proceed
    cy.get('.mt-1 > .mt-4 > .myBtn').click();

    //ok
    cy.get('#pr_id_11_content > :nth-child(1) > .mt-4 > :nth-child(1)').click();

    });

});

