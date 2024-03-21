export const addComment = (text: string) => {
  cy.getByTestId("AddCommentForm.Input").type(text);
  cy.wait(500);
  cy.getByTestId("AddCommentForm.Button").click();
};

export const removeComment = (commentID: string) => {
  return cy.request({
    method: "DELETE",
    url: `http://localhost:8000/comments/${commentID}`,
    headers: {
      authorization: "asdf",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
      removeComment(commentID: string): Chainable<void>;
    }
  }
}
