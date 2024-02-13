import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

/**
 * Unit tests for the fetchNextArticlesPage thunk.
 */
describe("fetchNextArticlesPage", () => {
  /**
   * Test for the success scenario.
   */
  test("success", async () => {
    // Initialize the TestAsyncThunk with fetchNextArticlesPage and initial state
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        // Initial state
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    // Call the thunk
    await thunk.callThunk();

    // Assertions
    expect(thunk.dispatch).toBeCalledTimes(4); // Ensure dispatch is called 4 times
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 }); // Ensure fetchArticlesList is called with the correct parameters
  });

  /**
   * Test when fetchArticlesList should not be called.
   */
  test("fetchAritcleList is not called", async () => {
    // Initialize the TestAsyncThunk with fetchNextArticlesPage and initial state
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    // Call the thunk
    await thunk.callThunk();

    // Assertions
    expect(thunk.dispatch).toBeCalledTimes(2); // Ensure dispatch is called 2 times (pending & fulfilled)
    expect(fetchArticlesList).not.toHaveBeenCalled(); // Ensure fetchArticlesList is not called
  });

  /**
   * Test when isLoading is true.
   */
  test("fetchArticlesList is not called when isLoading is true", async () => {
    // Initialize the TestAsyncThunk with fetchNextArticlesPage and initial state
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
      },
    });

    // Call the thunk
    await thunk.callThunk();

    // Assertions
    expect(thunk.dispatch).toBeCalledTimes(2); // Ensure dispatch is not called when isLoading is true
    expect(fetchArticlesList).not.toHaveBeenCalled(); // Ensure fetchArticlesList is not called when isLoading is true
  });
});
