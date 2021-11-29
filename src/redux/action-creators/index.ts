import { Dispatch } from "react";
import axios from "axios";

import { RootState } from "../reducers";
import { ActionType } from "../action-types";
import {
  DeleteCellAction,
  UpdateCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  Direction,
  Action,
} from "../actions";
import { CellTypes, Cell } from "../cell";
import bundler from "../../bundler";

// Cells CRUD
export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellAfter = (
  id: string | null,
  cellType: CellTypes
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  };
};

// Bundler
export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.BUNDLE_START, payload: { cellId } });

    const result = await bundler(input);

    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      payload: { cellId, bundle: result },
    });
  };
};

// Fetch and Save Cells
export const fetchCells = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_CELLS });

  try {
    const { data }: { data: Cell[] } = await axios.get("/cells");

    dispatch({
      type: ActionType.FETCH_CELLS_COMPLETE,
      payload: data,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_CELLS_ERROR,
      payload: err.message,
    });
  }
};

export const saveCells = () => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const { cells } = getState();

    const orderedCells = cells?.order.map((id) => cells.data[id]);

    try {
      await axios.post("/cells", { cells: orderedCells });
    } catch (err: any) {
      dispatch({
        type: ActionType.SAVE_CELLS_ERROR,
        payload: err.message,
      });
    }
  };
};
