import { Dispatch } from "react";

import { Action } from "../actions";
import { ActionType } from "../action-types";
import { RootState } from "../reducers/";
import { saveCells } from "../action-creators";

export const saveCellsMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  return (next: (action: Action) => void) => {
    let timer: any;
    return (action: Action) => {
      next(action);

      // Action types that modifies the cells state
      const typesToWatch = [
        ActionType.MOVE_CELL,
        ActionType.INSERT_CELL_AFTER,
        ActionType.DELETE_CELL,
        ActionType.UPDATE_CELL,
      ];

      if (typesToWatch.includes(action.type)) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          // saveCells returns a function that accepts args  (redux-thunk)
          saveCells()(dispatch, getState);
        }, 500);
      }
    };
  };
};
