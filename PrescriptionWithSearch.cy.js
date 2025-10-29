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
   
                                              //Disease/Diagnosis
    //add disease
    cy.get('.disease_component > .p-0 > .add-button-container > :nth-child(1)').click();
    //wait 
    // cy.wait(2000);

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
    //wait 
    // cy.wait(2000);
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
    //wait 
    // cy.wait(2000);
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
    //wait 
    // cy.wait(2000);
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
    //wait 
    // cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
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
     //wait
    //  cy.wait(2000);
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(12).should('be.visible').type('S-001');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index]').contains('S-001').click();

                                         //Medicines
     //add
     cy.get(':nth-child(13) > .p-0 > .add-button-container > :nth-child(1)').click();
     //wait
    //  cy.wait(2000);
     //select Procedure
     cy.get('.p-autocomplete-multiple-container').eq(13).should('be.visible').type('T-247 : ALP TAB 0.25 MG(Alprazolam)');
     // Wait for suggestions to appear
     cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
     .should('be.visible');
     // Click the matching suggestion
     cy.get('[index="0"]').click();
    //  cy.get('[index]').contains('S-T-247 : ALP TAB 0.25 MG(Alprazolam)').click();
    //  cy.get('.p-autocomplete-item').click();
     //Dose
     cy.get(':nth-child(1) > :nth-child(4) > .p-inputnumber > .p-inputnumber-button-group > .p-inputnumber-button-up').click();
     //Frequancy
     cy.get(':nth-child(1) > :nth-child(5) > .p-dropdown > .p-dropdown-trigger').click();
     //Select freqancy
     cy.get('[aria-label="od: once a day"]').click();
     //Duration
     cy.get(':nth-child(13) > .container-fluid > .diagnosis-table-container > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(1) > :nth-child(6) > .p-inputnumber > .p-inputnumber-button-group > .p-inputnumber-button-up > .p-icon').click();
     //Quantity
     cy.get(':nth-child(1) > :nth-child(8) > .p-inputnumber > #Quantity').type('2');

    //                                     //2Medicines
    //  //add
    //  cy.get(':nth-child(13) > .p-0 > .add-button-container > :nth-child(1)').click();
    //  //wait
    //  cy.wait(2000);
    //  //select Procedure
    //  cy.get('.p-autocomplete-multiple-container').eq(14).should('be.visible').type('T-27036 : GLUCOPHAGE TAB 500 MG (Metformin)');
    //  // Wait for suggestions to appear
    //  cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
    //  .should('be.visible');
    //  // Click the matching suggestion
    //  cy.get('[index="0"]').click();
    // //  cy.get('.p-autocomplete-item').click();
    //  //Dose
    //  cy.get('.p-row-odd > :nth-child(4) > .p-inputnumber > .p-inputnumber-button-group > .p-inputnumber-button-up').click();
    //  //Frequancy
    //  cy.get('.p-row-odd > :nth-child(5) > .p-dropdown > .p-dropdown-trigger').click();
    //  //Select freqancy
    //  cy.get('[aria-label="od: once a day"]').click();
    //  //Duration
    //  cy.get(':nth-child(13) > .container-fluid > .diagnosis-table-container > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > .p-row-odd > :nth-child(6) > .p-inputnumber > .p-inputnumber-button-group > .p-inputnumber-button-up').click();
    //  //Quantity
    //  cy.get('.p-row-odd > :nth-child(8) > .p-inputnumber > #Quantity').type('2');
      
    //                                    //3Medicines
    //  //add
    //  cy.get(':nth-child(13) > .p-0 > .add-button-container > :nth-child(1)').click();
    //  //wait
    //  cy.wait(2000);
    //  //select Procedure
    //  cy.get('.p-autocomplete-multiple-container').eq(15).should('be.visible').type('967 : brufen SYP 100 mg (Ibuprofen, Susp/Tabs)');
    //  // Wait for suggestions to appear
    //  cy.get('[index]', { timeout: 10000 }) // wait until dropdown items appear
    //  .should('be.visible');
    //  // Click the matching suggestion
    //  cy.get('[index="0"]').click();
    // //  cy.get('.p-autocomplete-item').click();
    //  //Dose
    //  cy.get(':nth-child(3) > :nth-child(4) > .p-inputnumber > .p-inputnumber-button-group > .p-inputnumber-button-up').click();
    //  //Frequancy
    //  cy.get(':nth-child(3) > :nth-child(5) > .p-dropdown > .p-dropdown-trigger').click();
    //  //Select freqancy
    //  cy.get('[aria-label="od: once a day"]').click();
    //  //Duration
    //  cy.get(':nth-child(13) > .container-fluid > .diagnosis-table-container > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(3) > :nth-child(6) > .p-inputnumber > .p-inputnumber-button-group > .p-inputnumber-button-up').click();
    //  //Quantity
    //  cy.get(':nth-child(3) > :nth-child(8) > .p-inputnumber > #Quantity').type('2');

                                                       //medwithFav
    //click on fav
    cy.get(':nth-child(13) > .container-fluid > .add-button-container > :nth-child(2)').click();
    //select
    cy.get(':nth-child(6) > td').click();
    cy.get(':nth-child(7) > td').click();
    cy.get(':nth-child(8) > td').click();
    cy.get(':nth-child(9) > td').click();

    //close
    cy.get('.p-dialog-header-icon').click();

                                             //Save
    //Save Prescription
     cy.get(':nth-child(1) > .justify-content-center > :nth-child(1)').click();
    //ok
    cy.get('.mybtn').click();
});

});



