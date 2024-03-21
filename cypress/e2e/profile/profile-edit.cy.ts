let profileId = "";

describe("User opens profile page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it("and profile uploading", () => {
    cy.getByTestId("ProfileCard.firstName").should("have.value", "test");
  });
  it("user edit profile", () => {
    const newName = "new";
    const newLastname = "newLastname";
    cy.updateProfile(newName, newLastname);
    cy.getByTestId("ProfileCard.firstName").should("have.value", newName);
    cy.getByTestId("ProfileCard.lastName").should("have.value", newLastname);
  });
});
