describe("user can see first page", () => {
  before(() => {
    cy.visit("http://192.168.12.120:19006");
  });

  it("can see the header", () => {
    cy.contains("Rock Paper Scissor");
  });

  it("can click the play button", () => {
    cy.get('[role="button"]').click()
  });

  it("can see countdown", () => {
    cy.contains('5')
    cy.contains('4')
    cy.contains('3')
    cy.contains('2')
    cy.contains('1') 
  });

  it("can see the random picture", () => {
    cy.get('img')
  });

  it("can click let's play button again", () => {
    cy.get('[role="button"]').click()
  });

});
