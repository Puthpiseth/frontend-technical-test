describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render an animated svg and user text infomation', () => {
    cy.get('[data-cy="homepage-animated-svg"]');
    cy.contains(/hello, welcome to the leboncoin chat plateform\. please click on a user to start your discussion 👇/i);
  });

  it('should display a list of users and redirect to the http://localhost/conversations/1 when clicking on the first user', () => {
    cy.get('[data-cy="user-list"] > :nth-child(1)').click();
    cy.url().should('include', '/conversations/1');
  });
});

export {};
