import axios from "axios";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

//mocking axios
jest.mock("axios");
//jest for mocked modules adds functions "mockReturnValue" which helps return mocked value, but TS by default such functions does not see, therefore
// mocked(axios, true) - axios is module we setting and flag true, for mocking fileds in module
const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test("Name", async () => {
  //   const userValue = { username: "admin", id: "1" };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUsername({ username: "123", password: "123" }); //its a function createAsyncThunk, returning some action
  //   const result = await action(dispatch, getState, undefined); //calling action from createAsyncThunk and placing into result

  //   console.log(result);
  //   //Checking that action was called with userValue
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   //Checking if method POST was called
  //   expect(mockedAxios.post).toHaveBeenCalled(2);
  //   //Checking status fulfilled
  //   expect(result.meta.requestStatus).toBe(
  //     result.meta.requestStatus === "fulfilled"
  //   );
  // });

  test("success login", async () => {
    // mock is configured to return a resolved Promise with the specified user data.
    const userValue = { username: "123", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    /** A new instance of TestAsyncThunk is created,
        initialized with the loginByUsername action creator.
        * The callThunk method is invoked with a mock payload { username: "123", password: "123" }. 
        * This simulates calling the asynchronous Redux thunk with a login request.
     */
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    // Verifies that the dispatch function of the thunk was called
    // with the expected action (userActions.setAuthData(userValue)).
    // This asserts that the Redux state is updated correctly after a successful login.
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    // Ensures that the dispatch function was called three times.
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);

    // Checks if the mocked Axios post method was called,
    // confirming that the login API request was made.
    expect(mockedAxios.post).toHaveBeenCalled();

    // Validates that the result's meta.requestStatus is "fulfilled,"
    // indicating a successful asynchronous operation.
    expect(result.meta.requestStatus).toBe("fulfilled");

    // Verifies that the result payload matches the expected user data returned from the API.
    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "notExistingUsername",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
