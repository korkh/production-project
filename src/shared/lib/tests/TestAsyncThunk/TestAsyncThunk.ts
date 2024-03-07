import { AnyAction, AsyncThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";

/**
 * Following type represents function accepting arg and returns asyncThunkAction
 */

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

/**
 * Following class is for testing all AsyncThunks
 * dispatch - mocked function
 * getState() - mockedFn to get current State
 * actionCreator - instance of type ActionCreatorType
 * undefined - extra configuration or data for Thunk
 */

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<ThunkDispatch<StateSchema, undefined, AnyAction>>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
  }

  // To call saved async action with argument Arg (expected by asyncThunk)
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });

    return result;
  }
}
