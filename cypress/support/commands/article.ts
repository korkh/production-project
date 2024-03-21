import { Article } from "../../../src/entities/Article";

const defaultArticle = {
  title: "TITLE OF TESTING ARTICLE",
  subtitle: "Subtitle of testing article",
  img: "https://th.bing.com/th/id/R.e5504daec5e23540113bfde6b1d4d0ff?rik=FjX3yf2CfPRTZg&riu=http%3a%2f%2fwww.spaceopedia.com%2fwp-content%2fuploads%2f2017%2f07%2fFuture-of-Exploration.jpg&ehk=IuZ3x6mgABbXzsGuDCPmaCNHa5YDG%2b%2fc30P%2b8tP3ZtM%3d&risl=&pid=ImgRaw&r=0",
  views: 610,
  createdAt: "05.06.2024",
  userId: "3",
  type: ["SCIENCE"],
  blocks: [],
  user: {
    id: "3",
    username: "manager",
    password: "123",
    roles: ["MANAGER"],
    avatar:
      "https://th.bing.com/th/id/OIP.2dkkfi3yqJkXIhgG-J5wnwHaHa?rs=1&pid=ImgDetMain",
  },
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: "POST",
      url: "http://localhost:8000/articles",
      headers: { Authorization: "asasf" },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "asasf" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
