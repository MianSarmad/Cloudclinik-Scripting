
// import { faker } from '@faker-js/faker';

// describe('Login & Walk-in Appointment', () => {

//   it('should create 10 walk-in appointments safely in one session', () => {
//     cy.viewport(1920, 1080);
//     cy.visit('https://reactstaging.cloudclinik.com/web/cloudclinik/cc-login');

//     // Login
//     cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_login"]').type('mehrabpur.medic');  
//     cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_password"]').type('cloudclinik1');
//     cy.get('.btn.login-btn.linear-gradient-btn.btn-primary').click();

//     // Select clinic
//     cy.get('.ui-selectonemenu-trigger').click();
//     cy.get('ul[id^="_selectClinic_WAR_CCPortlet_"]').contains('Dr Maria Chaudhary').click();

//     cy.wait(2000);

//     // LOOP 10 TIMES in one session
//     for (let i = 1; i <= 50; i++) {
//       cy.log(`Creating appointment #${i}`);

//       // walk in appointment
//       cy.get('.justify-content-end > :nth-child(1)').click({ force: true });

//       // register patient
//       cy.get('.MuiTypography-root').click({ force: true });
//       cy.wait(1500);

//       // Names
//       cy.get('[name="firstName"]').clear().type(faker.person.firstName());
//       cy.get('[name="lastName"]').clear().type(faker.person.lastName());

//       // age
//       const randomAge = Math.floor(Math.random() * 100) + 1;
//       cy.get('[name="age"]').clear().type(randomAge.toString());

//       // phone
//       cy.get('[name="mobileNo"]').clear().type('03203219393');

//       // proceed buttons
//       cy.get(':nth-child(8) > .row > .d-flex > .myBtn').click({ force: true });
//       cy.wait(2000)
//       cy.get('.mt-1 > .mt-4 > .myBtn').click({ force: true });
//       cy.wait(4000);

//       // OK button (dynamic ID handled)
//       cy.get('[id^="pr_id_"]').first().find('.mt-4 > :nth-child(1)').click({ force: true });
//       cy.wait(2000);
//     }
//   });
// });

import { faker } from '@faker-js/faker';

describe('Random Login & Walk-in Appointment Loop', () => {

  it('should login with a random user and create 10 walk-in appointments', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://reactstaging.cloudclinik.com/web/cloudclinik/cc-login');

    // ✅ Step 1: Define your users
    const users = [
      "medic.golarchi",
      "medic.tandobhago",
      "medic.haala",
      "medic.tandoyar",
      "medic.balakot",
      "medic.tangi",
      "medic.takhatbhai",
      "RattoDero.medic",
      "Kambar.medic",
      "Mehar.medic",
      "Rohri.medic",
      "Shikarpur.medic",
      "Madeji.medic",
      "sakrand.medic",
      "shahdadpur.medic",
      "mehrabpur.medic",
      "ranipur.medic",
      "sanghar.medic"
    ];

    // ✅ Step 2: Randomly select one user
    const randomUser = faker.helpers.arrayElement(users);
    const password = "cloudclinik1";

    cy.log(`🔑 Logging in as: ${randomUser}`);

    // ✅ Step 3: Login
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_login"]').type(randomUser);
    cy.get('input[name="_com_liferay_login_web_portlet_LoginPortlet_password"]').type(password);
    cy.get('.btn.login-btn.linear-gradient-btn.btn-primary').click();

    // ✅ Step 4: Select clinic (if visible)
    cy.get('.ui-selectonemenu-trigger', { timeout: 10000 }).click();
    cy.get('ul[id^="_selectClinic_WAR_CCPortlet_"]')
      .contains('Dr Maria Chaudhary', { matchCase: false })
      .click();

    cy.wait(2000);

    // ✅ Step 5: Create 10 Walk-in Appointments
    for (let i = 1; i <= 100; i++) {
      cy.log(`🧾 Creating Walk-in Appointment #${i}`);

      // Walk-in appointment
      cy.get('.justify-content-end > :nth-child(1)').click({ force: true });

      // Register patient
      cy.get('.MuiTypography-root').click({ force: true });
      cy.wait(1500);

      // Names (Pakistani-style)
      const pakistaniFirstNames = [
  "Ali", "Ahmed", "Hassan", "Hussain", "Bilal", "Usman", "Zain", "Fahad", "Saad", "Umer",
  "Hamza", "Talha", "Danish", "Kashif", "Imran", "Naveed", "Adeel", "Adnan", "Tahir", "Rizwan",
  "Faisal", "Farhan", "Junaid", "Asim", "Zeeshan", "Arif", "Rehan", "Salman", "Kamran", "Waqas",
  "Sana", "Ayesha", "Fatima", "Maryam", "Hira", "Maham", "Sara", "Anum", "Mehwish", "Khadija",
  "Mariam", "Sadia", "Huma", "Rida", "Bushra", "Nida", "Rimsha", "Iqra", "Komal", "Zoya",
  "Priya", "Anjali", "Neha", "Pooja", "Divya", "Sneha", "Riya", "Nisha", "Kajal", "Simran",
  "Rajesh", "Amit", "Rohit", "Vikas", "Arjun", "Ravi", "Vivek", "Manish", "Sandeep", "Deepak",
  "Ankit", "Akshay", "Rahul", "Karan", "Mohit", "Nitin", "Sanjay", "Harish", "Vishal", "Abhishek",
  "Zarina", "Rubina", "Fariha", "Shazia", "Yasir", "Taimoor", "Asad", "Ehsan", "Nouman", "Shayan",
  "Hassanain", "Haider", "Tuba", "Minal", "Dua", "Noor", "Areeba", "Zainab", "Ifrah", "Aiman"
];
   const pakistaniLastNames = [
  "Khan", "Malik", "Raza", "Qureshi", "Butt", "Chaudhary", "Mirza", "Sheikh", "Farooqi", "Naeem",
  "Hashmi", "Kazmi", "Naqvi", "Abbasi", "Jaffri", "Siddiqui", "Shah", "Gilani", "Syed", "Pirzada",
  "Gul", "Yousafzai", "Afridi", "Awan", "Rind", "Khosa", "Bugti", "Mengal", "Talpur", "Junejo",
  "Baloch", "Khoso", "Somro", "Bhutto", "Jatoi", "Leghari", "Kakar", "Marri", "Langah", "Chandio",
  "Bhatti", "Warraich", "Cheema", "Tariq", "Anwar", "Nawaz", "Iqbal", "Haider", "Farid", "Hameed",
  "Mahmood", "Aziz", "Latif", "Rashid", "Usmani", "Asghar", "Akhtar", "Hanif", "Idrees", "Ansari",
  "Singh", "Patel", "Sharma", "Gupta", "Verma", "Reddy", "Chopra", "Bajwa", "Suri", "Kapoor",
  "Gill", "Chatterjee", "Banerjee", "Joshi", "Desai", "Mehta", "Shukla", "Tripathi", "Goswami", "Trivedi",
  "Pandey", "Tandon", "Saxena", "Bhatia", "Sethi", "Grover", "Kohli", "Bhasin", "Ahluwalia", "Oberoi",
  "Mahajan", "Talib", "Mughal", "Rumi", "Dar", "Nizami", "Shamsi", "Noorani", "Yazdani", "Soomro"
];
      const firstName = faker.helpers.arrayElement(pakistaniFirstNames);
      const lastName = faker.helpers.arrayElement(pakistaniLastNames);

      cy.get('[name="firstName"]').clear().type(firstName);
      cy.get('[name="lastName"]').clear().type(lastName);

      // Random age (1–100)
      const randomAge = Math.floor(Math.random() * 100) + 1;
      cy.get('[name="age"]').clear().type(randomAge.toString());

      // Phone
      cy.get('[name="mobileNo"]').clear().type('03203219393');

      // Proceed buttons
      cy.get(':nth-child(8) > .row > .d-flex > .myBtn').click({ force: true });
      cy.wait(2000);
      cy.get('.mt-1 > .mt-4 > .myBtn').click({ force: true });
      cy.wait(4000);
      // OK button (dynamic ID)
      cy.get('[id^="pr_id_"]').first().find('.mt-4 > :nth-child(1)').click({ force: true });
      cy.wait(2000);
    }
  });

});
