//print board function:
// - only job is to take visibleBoard and dataBoard / playerBoard and print it to the console.
// - for console use only
// - it will NOT modify any values

import type { DataBoard } from "./board-types";
import type { VisibleBoard } from "./board-types";

export function printBoard(
  dataBoard: DataBoard,
  visibility: boolean,
): VisibleBoard {
  //initialize two boards for return
  const visibleBoard: VisibleBoard = {};
  const transParentBoard: VisibleBoard = {};

  for (let [label, row] of dataBoard.entries()) {
    const rowLabelVisible = String.fromCharCode(65 + label);
    const rowLabelTransparent = "Row" + label;
    visibleBoard[rowLabelVisible] = [];
    transParentBoard[rowLabelTransparent] = [];

    for (let obj of row) {
      let placeHolderVisible = "-";
      let placeHolderTransparent = "-";
      if (obj.hit === true) {
        placeHolderVisible = "🟠";
        placeHolderTransparent = "🟠";
      }
      if (obj.type === "large") {
        placeHolderTransparent = "L";
      }
      if (obj.type === "small") {
        placeHolderTransparent = "S";
      }
      if (obj.isSunk === true) {
        placeHolderTransparent = "❗";
        placeHolderVisible = "❗";
      }
      visibleBoard[rowLabelVisible].push(placeHolderVisible);
      transParentBoard[rowLabelTransparent].push(placeHolderTransparent);
    }
  }
  const returnBoard = visibility ? transParentBoard : visibleBoard;
  console.table(returnBoard);
  return returnBoard;
}

const testBoard: DataBoard = [
  [
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
    {
      type: "large",
      id: 4,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
  ],
  [
    {
      type: "small",
      id: 10,
      hit: true,
      isSunk: true,
    },
    {
      type: "large",
      id: 4,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
  ],
  [
    {
      type: "small",
      id: 10,
      hit: true,
      isSunk: true,
    },
    {
      type: "large",
      id: 4,
      hit: true,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
  ],
  [
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
    {
      type: "empty",
      id: null,
      hit: false,
      isSunk: false,
    },
  ],
];

printBoard(testBoard, false);
