let currentArticleId = "";
// let commentId = "";
describe("Пользователь заходит на страницу статьи", () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it("И видит содержимое статьи", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist");
  });
  it("И видит список рекоммендаций", () => {
    cy.wait(1000);
    cy.getByTestId("ArticleRecommendationsList").should("exist");
  });
  it("И оставляет комментарий", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("AddCommentForm").scrollIntoView();
    cy.addComment("text");
    cy.getByTestId("CommentCard.Content").should("have.length", 1);

    // cy.intercept("POST", "**comments").as("createComment");

    // cy.getByTestId("ArticleDetails.Info").should("exist");
    // cy.getByTestId("AddCommentForm").scrollIntoView();

    // cy.addComment("text");
    // cy.wait("@createComment", { timeout: 10000 }).then(({ response }) => {
    //   commentId = response?.body?.id ?? "";
    //   console.log(response, commentId);
    // });

    // cy.getByTestId("CommentCard.Content")
    //   .should("have.length", 1)
    //   .then(() => {
    //     cy.removeComment(commentId);
    //   });
  });
  it("И ставит оценку", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, "feedback");
    cy.get("[data-selected=true]").should("have.length", 4);
  });
  it("И ставит оценку (пример с стабом на фикстурах)", () => {
    cy.intercept("GET", "**/articles/*", {
      fixture: "article-details.json",
    });
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, "feedback");
    cy.get("[data-selected=true]").should("have.length", 4);
  });
});
