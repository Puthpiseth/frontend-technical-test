describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render an animated svg and user text infomation', () => {
    cy.get('[data-test=homepage-animated-svg]');
    cy.contains(/hello, welcome to the leboncoin chat plateform\. please click on a user to start your discussion 👇/i);
  });

  it('should display a list of users and redirect to the conversation page when clicking on a user', () => {
    cy.get('#__next > div:nth-child(2) > div:nth-child(3)').click();
    cy.url().should('include', '/conversations/1');
  });
});

export {};
