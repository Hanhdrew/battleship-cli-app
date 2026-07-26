export function generateBoard(num: number): Record<string, string[]> {
  const board: Record<string, string[]> = {};

  for (let i = 0; i < num; i++) {
    const rowLabel = String.fromCharCode(65 + i);
    board[rowLabel] = Array(num).fill("-");
  }

  return board;
}
