import {
  generateCell,
  incorrectIndex,
  newOrder,
  createCellsDict,
} from "../helpers";
import { produce } from "immer";

import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";

interface CellState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = produce(
  (state: CellState = initialState, action: Action): CellState => {
    switch (action.type) {
      case ActionType.FETCH_CELLS:
        state.loading = true;
        state.error = null;
        return state;

      case ActionType.FETCH_CELLS_COMPLETE:
        state.order = action.payload.map((cell) => cell.id);
        state.data = createCellsDict(action.payload);
        return state;

      case ActionType.FETCH_CELLS_ERROR:
        state.error = action.payload;
        return state;

      case ActionType.SAVE_CELLS_ERROR:
        state.error = action.payload;
        return state;

      case ActionType.UPDATE_CELL:
        const { id, content } = action.payload;
        state.data[id].content = content;
        return state;

      case ActionType.DELETE_CELL:
        delete state.data[action.payload];
        state.order = state.order.filter((id) => id !== action.payload);
        return state;

      case ActionType.MOVE_CELL:
        const { order } = state;
        const { direction } = action.payload;

        const index = order.findIndex((id) => id === action.payload.id);
        const targetIndex = direction === "up" ? index - 1 : index + 1;

        if (incorrectIndex(targetIndex, order)) {
          return state;
        }
        // swap
        order[index] = order[targetIndex];
        order[targetIndex] = action.payload.id;
        return state;

      case ActionType.INSERT_CELL_AFTER:
        const cell: Cell = generateCell(action.payload.type);
        state.data[cell.id] = cell;
        state.order = newOrder(state.order, action.payload.id, cell.id);
        return state;

      default:
        return state;
    }
  }
);

export default reducer;
