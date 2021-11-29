import { produce } from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        err: string;
        code: string;
      }
    | undefined;
}

const initialState: BundlesState = {};

const reducer = produce(
  (state: BundlesState = initialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          code: "",
          err: "",
        };

        return state;
      case ActionType.BUNDLE_COMPLETE:
        const { code, err } = action.payload.bundle;
        state[action.payload.cellId] = {
          loading: false,
          err,
          code,
        };

        return state;
      default:
        return state;
    }
  }
);

export default reducer;
