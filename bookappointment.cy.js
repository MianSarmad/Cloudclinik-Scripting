
describe('Login Test', () => {
    beforeEach(() => {
    cy.viewport(1920, 1080); // 💡 Full HD resolution
  });

  it('should login successfully with valid credentials', () => {
    // Step 1: Visit the login page
    cy.visit('https://reactstaging.cloudclinik.com/web/cloudclinik/cc-login');

    // Step 2: Enter username and password
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_login"]').type('dr.talha');   //asad.ali           2//dr.talha
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_password"]').type('cloudclinik1');  //infogistic1  2//cloudclinik1

    // Step 3: Click on login button
    cy.get('.btn.login-btn.linear-gradient-btn.btn-primary').click();
    //                       //for drop down only
    // //Select clinics
    // cy.get('.ui-selectonemenu-trigger').click();
    // //click on selected 
    // cy.get('[data-label="Dr Asad Ali Clinic"]').click()
  
                           //for not drop down
    // Step 4: Verify successful login (for example, check dashboard or user name)
    cy.contains('Dashboard').should('be.visible');

    // Start announcements
    cy.get('.row > .d-flex > :nth-child(2)').click();
    //appointment calender
    cy.get('.lower-nav > :nth-child(2) > a').click();
    // //slot
    // cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    // //Book Appointment
    // cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    // //Contact Number 
    // cy.get('#ContactNumber').type('03203219393');
    // //search button
    // cy.get('.mt-4 > .d-flex > .myBtn').click();
    // //Drop down open 
    // cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    // //select 50
    // cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    // //select patient
    // cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(1) > :nth-child(2)').click();
    // //arrive
    // cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    // //confirm
    // cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    // //cancel
    // cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();
   
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(2) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(3) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(4) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(5) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(6) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(7) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(8) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(9) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(10) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //  slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(11) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(12) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(13) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(14) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(15) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(16) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(17) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(18) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(19) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(20) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(21) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(22) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(23) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(24) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(25) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();
    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(26) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();
    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(27) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();
    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(28) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(29) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(30) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(31) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

    
    //slot
    cy.get(':nth-child(6) > .time_header_MaxWidth > div > .no-bg').click();
    //Book Appointment
    cy.get('#popup_menu_left_0 > .p-menuitem-content > .p-menuitem-link').click();
    //Contact Number 
    cy.get('#ContactNumber').type('03203219393');
    //search button
    cy.get('.mt-4 > .d-flex > .myBtn').click();
    //Drop down open 
    cy.get('.container > .card > .p-datatable > .p-paginator-bottom > .p-dropdown > .p-dropdown-label').click();
    //select 50
    cy.get('[aria-label="50"] > .p-dropdown-item-label').click();
    //select patient
    cy.get('.container > .card > .p-datatable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > :nth-child(32) > :nth-child(2)').click();
     //arrive
    cy.get('.Reserve > .time_header_MaxWidth > div > .no-bg').click();
    //confirm
    cy.get('#popup_menu_left_3 > .p-menuitem-content > .p-menuitem-link').click();
    //cancel
    cy.get(':nth-child(5) > .d-flex > :nth-child(2)').click();

  });

});
