describe('Conversation page', () => {
  beforeEach(() => {
    cy.visit('/conversations/1');
  });

  it('should display a list of conversations and recipientName', () => {
    cy.get('#__next > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2)').click();
    cy.contains(/conversation avec patrick/i);
  });

  it('should display an alert when there is an empty conversation', () => {
    cy.get('#__next > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(3)').click();
    cy.contains(/you have not had any conversations yet\. please click a user 👈 to start your discussion now 🚀/i);
  });

  it('should user write and add messages', () => {
    cy.get('form').type('What can I do for you ?').should('have.length.above', 0);
    cy.contains('Send').click();
  });

  it('Nagivate back to home page', () => {
    cy.get('[data-test="arrow-back"]').click();
    cy.url().should('include', '/');
  });
});

export {};
