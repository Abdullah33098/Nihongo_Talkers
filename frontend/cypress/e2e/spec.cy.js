describe('Auth Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/signup'); 
  });

  it('Should render signup page correctly', () => {
    cy.contains('Sign Up').should('be.visible');
    cy.contains('Sign up as a').should('be.visible');
    cy.get('.role-selector').should('exist');
  });

  it('Should move to step 2 after selecting Student', () => {
   
    cy.get('.role-selector').click();

    cy.get('.ant-select-item-option').contains('Student').click();

    cy.contains('Next').click();

    cy.contains('Your Details').should('be.visible');
  });

  it('Should allow filling Student details', () => {
    cy.get('.role-selector').click();
    cy.get('.ant-select-item-option').contains('Student').click();
    cy.contains('Next').click();

    cy.get('input[placeholder="Email"]').type('student@example.com');
    cy.get('input[placeholder="Email"]').should('have.value', 'student@example.com');

    // Fill Password
    cy.get('input[placeholder="Password"]').type('mypassword123');
    cy.get('input[placeholder="Password"]').should('have.value', 'mypassword123');

    cy.contains('Sign Up').click();
  });

  it('Should allow filling Tutor details', () => {
    cy.get('.role-selector').click();
    cy.get('.ant-select-item-option').contains('Tutor').click();
    cy.contains('Next').click();
    cy.get('input[placeholder="Email"]').type('tutor@example.com');
    cy.get('input[placeholder="Email"]').should('have.value', 'tutor@example.com');
    cy.get('input[placeholder="Password"]').type('securepass123');
    cy.get('input[placeholder="Password"]').should('have.value', 'securepass123');
    cy.contains('Sign Up').click();
  });

  it('Should navigate to signin when clicking "Sign in"', () => {
    cy.contains('Sign in').click();
    // Assertion (depends on your app route)
    cy.url().should('include', '/signin');
  });
  it('Should log in successfully and redirect to homepage', () => {
  cy.visit('http://localhost:5173/signin');
  cy.get('input[placeholder="Email"]').type('validuser@example.com');
  cy.get('input[placeholder="Password"]').type('validpassword123');
  cy.contains('Log In').click();
  cy.url().should('eq', 'http://localhost:5173/');
});
});


describe('My App', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Need a Tutor? We can help.').should('be.visible'); 
    cy.contains('Meet the most qualified Tutors.').should('be.visible');
    cy.contains('How it Works').should('be.visible');
    cy.contains('Find Tutors').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Contact Us').should('be.visible');
  });
  it('should navigate to About page', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
  });
  it('should navigate to Contact page', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Contact Us').click();
    cy.url().should('include', '/contact-us');
  });
  it('Should navigate to Register page', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Register').click();
    cy.url().should('include', '/tutor-signup');
  });

});





