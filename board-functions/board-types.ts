export type Row = {
  type: "empty" | "small" | "large";
  id: number | null;
  hit: boolean;
  isSunk: boolean;
};
export type DataBoard = Row[][];

export type VisibleBoard = Record<string, string[]>;
