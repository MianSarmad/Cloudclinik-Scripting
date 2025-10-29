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

    //OrderSet
    cy.get('.icon-orderset').click();

    //add new
    cy.get('.d-flex > .btn').click();

    function getUniqueName(prefix = 'Tc') {
  return `${prefix}_${Date.now()}`; // Example: Testcase_1739591849321
}

    //orderset name
    // orderset name
cy.get('[name="ordersetName"]').type(getUniqueName());


    // //add complaint
    // cy.get('.complaints_component > .p-0 > .add-button-container > :nth-child(1)').click();
    // //add
    // cy.get('.p-autocomplete-multiple-container').first().should('be.visible').type('Take').wait(2000);
    // //wait
    // cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
    //  .should('be.visible');
    //  //wait
    //  cy.wait(2000);
    //  //select
    //  cy.get('[index]').contains('Take').click();

                                              //add disease
    cy.get('.disease_component > .p-0 > .add-button-container > :nth-child(1)').click();
    //select disease
    cy.get('.p-autocomplete-input-token input').should('be.visible').first().clear().type('sadism');
    // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
      // Click the matching suggestion
     cy.get('[index]').contains('sadism').click();

        //2Disease/Diagnosis
      //add disease
    cy.get('.disease_component > .p-0 > .add-button-container > :nth-child(1)').click();
    
     //select disease
    cy.get('.p-autocomplete-multiple-container > .p-autocomplete-input-token').eq(1).should('be.visible').type('hypertension');
    // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('hypertension').click();

                                              //3Disease/Diagnosis
      //add disease
    cy.get('.disease_component > .p-0 > .add-button-container > :nth-child(1)').click();
   
     //select disease
    cy.get('.p-autocomplete-multiple-container > .p-autocomplete-input-token').eq(2).should('be.visible').type('blood');
    // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('blood').click();
                                              //4Disease/Diagnosis
      //add disease
    cy.get('.disease_component > .p-0 > .add-button-container > :nth-child(1)').click();
   
     //select disease
    cy.get('.p-autocomplete-multiple-container > .p-autocomplete-input-token').eq(3).should('be.visible').type('class');
    // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('class').click();
    
                                              //5Disease/Diagnosis
      //add disease
    cy.get('.disease_component > .p-0 > .add-button-container > :nth-child(1)').click();
   
     //select disease
    cy.get('.p-autocomplete-multiple-container > .p-autocomplete-input-token').eq(4).should('be.visible').type('bone');
    // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('bone').click();
     
                                              //Procedure/Treatments
     
     //add
     cy.get('.procedure_component > .p-0 > .add-button-container > :nth-child(1)').click();
    
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(5).should('be.visible').type('S-01');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-01').click();
                                            
                                             //2Procedure/Treatments
     
     //add
     cy.get('.procedure_component > .p-0 > .add-button-container > :nth-child(1)').click();
   
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(6).should('be.visible').type('S-02');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-02').click();
                                              
                                            //3Procedure/Treatments
     
     //add
     cy.get('.procedure_component > .p-0 > .add-button-container > :nth-child(1)').click();
    
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(7).should('be.visible').type('S-03');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-03').click();

                                           //4Procedure/Treatments
     
     //add
     cy.get('.procedure_component > .p-0 > .add-button-container > :nth-child(1)').click();
    
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(8).should('be.visible').type('S-04');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-04').click();
                                          
                                          //1lab/labsets
     //Add 
     cy.get('.labset_component > .p-0 > .add-button-container > :nth-child(1)').click();
     
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(9).should('be.visible').type('S-01');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-01').click();
     
                                         //2lab/labsets
     //Add 
     cy.get('.labset_component > .p-0 > .add-button-container > :nth-child(1)').click();
     
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(10).should('be.visible').type('S-02');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-02').click();
     
                                         //3lab/labsets
     //Add 
     cy.get('.labset_component > .p-0 > .add-button-container > :nth-child(1)').click();
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(11).should('be.visible').type('S-03');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-03').click();
     
                                         //4lab/labsets
     //Add 
     cy.get('.labset_component > .p-0 > .add-button-container > :nth-child(1)').click();
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(12).should('be.visible').type('S-001');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-001').click();

                                         //medicine
     //add
     cy.get(':nth-child(9) > .p-0 > .add-button-container > :nth-child(1)').click();
     //select
      cy.get('.p-autocomplete-multiple-container').eq(13).should('be.visible').type('S-T-247 : ALP TAB 0.25 MG(Alprazolam)');
      // Wait for suggestions to appear
     cy.get('.p-autocomplete-item').click();
     //fav
     cy.get(':nth-child(9) > .container-fluid > .add-button-container > :nth-child(2)').click();
     //select
     cy.contains('td', 'T-3538 : ATN TAB 100 MG(Atenolol)').should('be.visible');

     //close
     cy.get('.p-dialog-header > .p-dialog-header-icons > .p-dialog-header-icon').click();







   



  
   });

});


