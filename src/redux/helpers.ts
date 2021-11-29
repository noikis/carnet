import { Direction } from "./actions";
import { Cell, CellTypes } from "./cell";

export interface CellsDict {
  [key: string]: Cell;
}

export const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export const generateCell = (type: CellTypes): Cell => {
  return {
    id: randomId(),
    content: "",
    type,
  };
};

export const incorrectIndex = (index: number, array: string[]) => {
  return index < 0 || index > array.length - 1;
};

export const getTargetIndex = (direction: Direction, index: number) => {
  return direction === "up" ? index - 1 : index + 1;
};

export const newOrder = (
  order: string[],
  payloadId: string | null,
  newCellId: string
) => {
  const currentIndex = order.findIndex((id) => id === payloadId);

  // Not found return -1
  if (currentIndex < 0) {
    order.unshift(newCellId);
  } else {
    order.splice(currentIndex + 1, 0, newCellId);
  }
  return order;
};

export const createCellsDict = (cells: Cell[]): CellsDict => {
  return cells.reduce((acc, cell) => {
    acc[cell.id] = cell;
    return acc;
  }, {} as CellsDict);
};
