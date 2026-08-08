export type Row = {
  type: "empty" | "small" | "large";
  id: number | null;
  hit: boolean;
};

export type DataBoard = Row[][];
