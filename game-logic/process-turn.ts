//takes a dataBoard as a parameter and will update it each turn

import type { DataBoard } from "../board-functions/board-types";
import { detectHit } from "./detect-hit";
import { detectSink } from "./detect-sink";

export function turn(dataBoard: DataBoard): DataBoard {}

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
    { type: "small", id: 2, hit: true, isSunk: true },
    { type: "large", id: 1, hit: false, isSunk: false },
    { type: "empty", id: null, hit: false, isSunk: false },
  ],

  [
    { type: "empty", id: null, hit: false, isSunk: false },
    { type: "small", id: 2, hit: true, isSunk: true },
    { type: "large", id: 1, hit: false, isSunk: false },
    { type: "empty", id: null, hit: false, isSunk: false },
  ],
];
