export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstName").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastName").clear().type(lastname);
  cy.wait(500);
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "asasf" },
    body: {
      id: "4",
      firstName: "test",
      lastName: "user",
      age: 465,
      currency: "EUR",
      country: "Poland",
      city: "TestCity",
      username: "testuser",
      avatar:
        "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
