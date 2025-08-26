describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/signup');
  });

  it('renders the signup page with required elements', () => {
    cy.contains('Sign Up').should('be.visible');
    cy.contains('Sign up as a').should('be.visible');
    cy.get('.role-selector').should('exist');
  });

  it('advances to step 2 after selecting "Student"', () => {
    cy.get('.role-selector').click();
    cy.get('.ant-select-item-option').contains('Student').click();

    cy.contains('Next').click();

    cy.contains('Your Details').should('be.visible');
  });

  it('submits signup form successfully as Student', () => {
    cy.get('.role-selector').click();
    cy.get('.ant-select-item-option').contains('Student').click();
    cy.contains('Next').click();

    cy.get('input[placeholder="Email"]').type('student@example.com');
    cy.get('input[placeholder="Email"]').should('have.value', 'student@example.com');

    cy.get('input[placeholder="Password"]').type('mypassword123');
    cy.get('input[placeholder="Password"]').should('have.value', 'mypassword123');

    cy.contains('Sign Up').click();
    // Expected assertion could be success message or redirection
  });

  it('submits signup form successfully as Tutor', () => {
    cy.get('.role-selector').click();
    cy.get('.ant-select-item-option').contains('Tutor').click();
    cy.contains('Next').click();

    cy.get('input[placeholder="Email"]').type('tutor@example.com');
    cy.get('input[placeholder="Email"]').should('have.value', 'tutor@example.com');

    cy.get('input[placeholder="Password"]').type('securepass123');
    cy.get('input[placeholder="Password"]').should('have.value', 'securepass123');

    cy.contains('Sign Up').click();
    // Expected assertion could be success message or redirection
  });

  it('navigates to Sign In page when clicking "Sign in"', () => {
    cy.contains('Sign in').click();
    cy.url().should('include', '/signin');
  });

  it('logs in with valid credentials and redirects to homepage', () => {
    cy.visit('http://localhost:5173/signin');

    cy.get('input[placeholder="Email"]').type('validuser@example.com');
    cy.get('input[placeholder="Password"]').type('validpassword123');
    cy.contains('Log In').click();

    cy.url().should('eq', 'http://localhost:5173/');
  });
});

describe('Public Pages Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('renders homepage content correctly', () => {
    cy.contains('Need a Tutor? We can help.').should('be.visible');
    cy.contains('Meet the most qualified Tutors.').should('be.visible');
    cy.contains('How it Works').should('be.visible');
    cy.contains('Find Tutors').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Contact Us').should('be.visible');
  });

  it('navigates to About page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
  });

  it('navigates to Contact page', () => {
    cy.contains('Contact Us').click();
    cy.url().should('include', '/contact-us');
  });

  it('navigates to Tutor Register page', () => {
    cy.contains('Register').click();
    cy.url().should('include', '/tutor-signup');
  });
});
