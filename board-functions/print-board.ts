// export function printBoard(board, flag) {

// }

// import chalk from "chalk";

// export function renderBoard(board: string[][]) {
//   for (const row of board) {
//     console.log(
//       row
//         .map((cell) => {
//           if (cell === "X") return chalk.red("X");
//           if (cell === "O") return chalk.blue("O");
//           return chalk.gray("~");
//         })
//         .join(" "),
//     );
//   }
// }

// renderBoard([
//   ["~", "~", "~", "~"],
//   ["~", "X", "~", "~"],
//   ["~", "~", "~", "O"],
//   ["~", "~", "~", "~"],
// ]);

console.table({
  A: ["-", "🟠", "-"],
  B: ["-", "-", "❗"],
  C: ["-", "-", "-"],
});
