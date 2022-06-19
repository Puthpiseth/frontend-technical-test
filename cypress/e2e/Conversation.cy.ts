describe('Conversation page', () => {
  beforeEach(() => {
    cy.visit('/conversations/1');
  });

  it('should display a list of conversations and recipientName', () => {
    cy.get('[data-cy="conversation-list"]').click();
    cy.contains(/conversation avec patrick/i);
  });

  it('should display an alert message when there is an empty conversation', () => {
    cy.contains(/you have not had any conversations yet\. please click a user 👈 to start your discussion now 🚀/i);
  });

  it('should user write and add messages', () => {
    cy.get('[data-cy="message-form"]').type('What can I do for you ?').should('have.length.above', 0);
    cy.get('[data-cy="submit-btn"]').should('contain', 'Send').click();
  });

  it('Nagivate back to home page', () => {
    cy.get('[data-cy="arrow-back"]').click();
    cy.url().should('include', '/');
  });
});

export {};
