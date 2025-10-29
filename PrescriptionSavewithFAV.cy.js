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
    //search patient
    cy.get('.widget-footer > .p-button').click();
    //file number
    cy.get('[name="fileNo"]').type('A1');
    //click on search
    cy.get('.mybtn').click();
    //select patient
    cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(2)').click();
    // //add complaint
    // cy.get('.complaints_component > .p-0 > .add-button-container > :nth-child(1)').click();
    // //enter complaint
    // cy.get('#pr_id_735 > .p-autocomplete-multiple-container > .p-autocomplete-input-token > input').type('fev');
    // //wait
    // cy.wait(2000)
    // //select complaint from dropdown
    // cy.get('[index="0"]').click();

    //add complaint
    cy.get('.complaints_component > .p-0 > .add-button-container > :nth-child(2)').click();
    //select from favorite
    cy.get('[tabindex="0"] > td').click();
    cy.get(':nth-child(2) > td').click();
    cy.get(':nth-child(3) > td').click();
    cy.get(':nth-child(4) > td').click();
    cy.get(':nth-child(5) > td').click();
    //close
    cy.get('.p-dialog-header-icon').click();
     
    //add significant
    cy.get('.significantSigns_component > .p-0 > .add-button-container > :nth-child(2)').click();
    //select from favorite
    cy.get('[tabindex="0"] > td').click();
    
    //close
    cy.get('.p-dialog-header-icon').click();

    //Doctor notes
    cy.get('#description').type('Take proper rest');

    //add disease
    cy.get('.disease_component > .p-0 > .add-button-container > :nth-child(2)').click();

    //select disease
    cy.get('[tabindex="0"] > td').click();

    //close
    cy.get('.p-dialog-header-icon').click();

    //select procedure
    cy.get('.procedure_component > .p-0 > .add-button-container > :nth-child(2)').click();

    //select
    cy.get('[tabindex="0"] > td').click();

    //close
    cy.get('.p-dialog-header-icon').click();

    //fav labs
    cy.get('.labset_component > .p-0 > .add-button-container > :nth-child(2)').click();

    //select lab
    cy.get('[tabindex="0"] > td').click();
    
    //close
    cy.get('.p-dialog-header-icon').click();

    //fav med
    cy.get(':nth-child(13) > .p-0 > .add-button-container > :nth-child(2)').click();

    //select med
    cy.get('[tabindex="0"] > td').click();

    //close
    cy.get('.p-dialog-header-icon').click();

    //save
    cy.get(':nth-child(1) > .justify-content-center > :nth-child(1)').click();

    //ok
    cy.get('.mybtn').click();









  




  
    
   
  

  




    


  });

});
