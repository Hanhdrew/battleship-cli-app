//takes transforms an array of board cells to generate the ships
import type { Row, DataBoard } from "./generate-databoard";

export function generatePlayerBoard(dataBoard: DataBoard): DataBoard {
  let largeShips: number = 0;
  let smallShips: number = 0;

  if (dataBoard.length === 4) {
    largeShips = 1;
    smallShips = 1;
  } else if (dataBoard.length === 5) {
    largeShips = 1;
    smallShips = 2;
  } else if (dataBoard.length === 6) {
    largeShips = 2;
    smallShips = 2;
  }

  type Direction = { row: number; col: number };

  const direction: Direction[] = [
    { row: 0, col: 1 }, //right
    { row: 0, col: -1 }, //left
    { row: -1, col: 0 }, //up
    { row: 1, col: 0 }, //down
  ];

  while (largeShips > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
  }
}

const testBoard1 = [
  [
    { type: "large", id: 1, hit: false }, // Represents position A0
    { type: "small", id: 2, hit: true }, // Represents position A1
    { type: "small", id: 2, hit: false }, // Represents position A2
  ],
  [
    { type: "large", id: 1, hit: false }, // Represents position B0
    { type: "empty", hit: false }, // Represents position B1
    { type: "empty", hit: true }, // Represents position B2
  ],
  [
    { type: "large", id: 1, hit: false }, // Represents position C0
    { type: "empty", hit: false }, // Represents position C1
    { type: "empty", hit: false }, // Represents position C2
  ],
];

generatePlayerBoard(testBoard1);

// 4X4:

// - [ ] 1 large
// - [ ] 1 small

// 5X5

// - [ ] 1 large
// - [ ] 2 small

// 6X6

// - [ ] 2 large
// - [ ] 2 small
