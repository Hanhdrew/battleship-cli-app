import inquirer from "inquirer";

export async function askBoardSize(): Promise<number> {
  const result = await inquirer.prompt([
    {
      type: "rawlist",
      name: "size",
      message: "Choose a board size:",
      choices: [
        { name: "4x4", value: 4 },
        { name: "5x5", value: 5 },
        { name: "6x6", value: 6 },
      ],
    },
  ]);

  return result.size;
}
