//takes a number and returns a visible board

import type { VisibleBoard } from "./board-types";

export function generateBoard(num: number): VisibleBoard {
  const visibleBoard: VisibleBoard = {};

  for (let i = 0; i < num; i++) {
    const rowLabel = String.fromCharCode(65 + i);
    visibleBoard[rowLabel] = Array(num).fill("-");
  }

  return visibleBoard;
}
