import { AnyAction, AsyncThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

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
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<ThunkDispatch<StateSchema, undefined, AnyAction>>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  //To call saved async action with argument Arg (expected by asyncThunk)
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
