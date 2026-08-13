export type VisibleBoard = Record<string, string[]>;

export type Row = {
  type: "empty" | "small" | "large";
  id: number | null;
  hit: boolean;
  isSunk: boolean;
};
export type DataBoard = Row[][];

export type Direction = { row: number; col: number };
export type Coordinate = { row: number; column: number };
export type Coordinates = Coordinate[];
