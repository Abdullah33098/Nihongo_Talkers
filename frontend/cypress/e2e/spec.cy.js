describe('My App', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:5173/');

    // Example: check if title or element exists
    cy.contains('Need a Tutor? We can help.').should('be.visible'); 
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
