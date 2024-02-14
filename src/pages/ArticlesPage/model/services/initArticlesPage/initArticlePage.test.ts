import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { initArticlesPage } from "./initArticlesPage";

jest.mock("../fetchArticlesList/fetchArticlesList");

/**
 * Unit tests for the fetchNextArticlesPage thunk.
 */
describe("initArticlesPage", () => {
  /**
   * Test for the success scenario.
   */
  test("success", async () => {
    // Initialize the TestAsyncThunk with fetchNextArticlesPage and initial state
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        // Initial state
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    // Call the thunk
    await thunk.callThunk();

    // Assertions
    expect(thunk.dispatch).not.toHaveBeenCalledWith(
      articlesPageActions.initState()
    );
  });

  /**
   * Test when fetchArticlesList should not be called.
   */
  test("initArticlesPage is not called", async () => {
    // Initialize the TestAsyncThunk with fetchNextArticlesPage and initial state
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
    });

    // Call the thunk
    await thunk.callThunk();

    // Assertions
    expect(thunk.dispatch).not.toHaveBeenCalledWith(
      articlesPageActions.initState()
    );
    expect(thunk.dispatch).toBeCalledTimes(2); // Ensure dispatch is called 2 times (pending & fulfilled)
    expect(fetchArticlesList).not.toHaveBeenCalled(); // Ensure fetchArticlesList is not called
  });

  /**
   * Test when isLoading is true.
   */
  test("initArticlesPage is not called when isLoading is true", async () => {
    // Initialize the TestAsyncThunk with fetchNextArticlesPage and initial state
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
        _inited: false,
      },
    });

    // Call the thunk
    await thunk.callThunk();

    // Assertions
    expect(thunk.dispatch).toHaveBeenCalledWith(
      articlesPageActions.initState()
    );
    expect(thunk.dispatch).toBeCalledTimes(4);
  });
});
