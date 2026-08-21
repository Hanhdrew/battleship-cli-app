export type Row = {
  type: "empty" | "small" | "large";
  id: number | null;
  hit: boolean;
  isSunk: boolean;
};
export type DataBoard = Row[][];

export type VisibleBoard = Record<string, string[]>;

export type BoardMetaData = {
  totalLargeShips: number;
  totalSmallShips: number;
  remainingLargeShips: number;
  remainingSmallShips: number;
  totalLargeShipsHit: number;
  totalSmallShipsHit: number;
  largeShipsSunk: number;
  smallShipsSunk: number;
};
