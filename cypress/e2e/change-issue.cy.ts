describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").clear().type("facebook/react/issues/25082");
  });
});
