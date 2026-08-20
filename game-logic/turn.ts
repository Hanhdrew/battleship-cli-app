//turn() will process each turn
//takes a dataBoard and a string as an input
//will adjust object properties according to the input string ie: hit, miss, or isSunk
//outputs an updated dataBoard

import type { DataBoard } from "../board-functions/board-types";

export function turn(dataBoard: DataBoard, guess: string): DataBoard {
  //hit logic
  const firstIndex: number = guess[0]!.charCodeAt(0) - 65;
  const secondIndex: number = Number(guess[1]!);

  const target = dataBoard[firstIndex]![secondIndex]!;

  if (target.hit === true || target.id === null) {
    return dataBoard;
  } else {
    target.hit = true;
  }

  //isSunk logic

  const sunk: boolean = dataBoard
    .flat()
    .filter((obj) => obj.id === target.id)
    .every((obj) => obj.hit === true);

  if (sunk) {
    for (let cell of dataBoard) {
      cell.forEach((row) => {
        if (row.id === target.id) {
          row.isSunk = true;
        }
      });
    }
  }
  return dataBoard;
}

const testBoard: DataBoard = [
  [
    { type: "empty", id: null, hit: false, isSunk: false }, //A0
    { type: "empty", id: null, hit: false, isSunk: false }, //A1
    { type: "empty", id: null, hit: false, isSunk: false },
    { type: "empty", id: null, hit: false, isSunk: false }, //A3
  ],

  [
    { type: "empty", id: null, hit: false, isSunk: false }, //B0
    { type: "empty", id: null, hit: false, isSunk: false },
    { type: "large", id: 1, hit: false, isSunk: false },
    { type: "empty", id: null, hit: false, isSunk: false }, //B3
  ],

  [
    { type: "empty", id: null, hit: false, isSunk: false },
    { type: "small", id: 2, hit: true, isSunk: false },
    { type: "large", id: 1, hit: false, isSunk: false },
    { type: "empty", id: null, hit: false, isSunk: false },
  ],

  [
    { type: "empty", id: null, hit: false, isSunk: false },
    { type: "small", id: 2, hit: true, isSunk: false },
    { type: "large", id: 1, hit: false, isSunk: false },
    { type: "empty", id: null, hit: false, isSunk: false },
  ],
];

console.log(turn(testBoard, "B2"));
