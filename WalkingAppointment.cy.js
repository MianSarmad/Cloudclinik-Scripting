describe('Login Test', () => {
    beforeEach(() => {
    cy.viewport(1920, 1080); // 💡 Full HD resolution
  });

  it('should login successfully with valid credentials', () => {
    // Step 1: Visit the login page
    cy.visit('https://reactstaging.cloudclinik.com/web/cloudclinik/cc-login');

    // Step 2: Enter username and password
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_login"]').type('As.khan');   //hb3.asstnt //Noreen.Ak //As.khan
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_password"]').type('cloudclinik1');

    // Step 3: Click on login button
    cy.get('.btn.login-btn.linear-gradient-btn.btn-primary').click();
    //Select clinic
    cy.get('.ui-selectonemenu-trigger').click();
    //wait
    cy.wait(2000)
    //click on selected 
    cy.get('[data-label="Dr Asad Hub one"]').click()   //[data-label="Dr Abdullah hub three"] //hub3  //[data-label="Dr RKH hub two"] noreen //[data-label="Dr Asad Hub one"] as
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(2) > :nth-child(2)').should('be.visible').click();

    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(3) > :nth-child(2)').should('be.visible').click();

    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(4) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(5) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(6) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(7) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(8) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(9) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(10) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(11) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(12) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(13) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(14) > :nth-child(2)').should('be.visible').click();
    
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(15) > :nth-child(2)').should('be.visible').click();
 //new   
//walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(16) > :nth-child(2)').should('be.visible').click();

    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(17) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(18) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(19) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(20) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(21) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(22) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(23) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(24) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(25) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(26) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(27) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(28) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(29) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(30) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(31) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(32) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(33) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(34) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(35) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(36) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(37) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(38) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(39) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(40) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(41) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(42) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(43) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(44) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(45) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(46) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(47) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(48) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(49) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(50) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(51) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(52) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(53) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(54) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(55) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(56) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(57) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(58) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(59) > :nth-child(2)').should('be.visible').click();
    
    //walk in appointment
    cy.get('.justify-content-end > :nth-child(1) > span').click();
    //contact no
    cy.get('#ContactNumber').type('03203219393');
    //search
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //chose
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-trigger').click();
    // select 50
    cy.get('[aria-label="50"]').click();
    //patient selcet
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(60) > :nth-child(2)').should('be.visible').click();
    
    
  

   

  });
  

});
