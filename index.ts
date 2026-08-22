//create a greet function
// - ask the user questions
// - ask the user the board size
// - use inquirer for menus and lists

// primary function to run game logic:
//create a turn function
// - this will run until a ships are fully destroyed:
// - possibly set this to a boolean flag for each ship
// - will return winner or loser

// key game logic:
//create a board generator function
// - it will only create the board size

//create a ship position function
// - it will accept the board size as a parameter
// - it will generate the position of ships and output the ships

//create a function that updates the board
// - it will take the board object as a parameter
// - it will output a new board object for each turn
// - this will be visible to the user

//helper functions for the game:

//create a validation functions:
// - validate user input
// - checks if the input is a hit or miss
// - return boolean?

//create a printBoard function two parameters for debugging and rendering
// - it takes (board, boolean)
// - if boolean === true; itll show all the ships positions
// - takes one parameter:
// - update board output

//inquire types:
// "input" → user types text

// "confirm" → yes/no

// "rawlist" → numbered list

// "select" → dropdown-style list

// "number" → numeric input

// "password" → hidden input

//"name" => becomes the key
//"message" => what shows the user
//"default" => the default value

import { startGame } from "./input-functions/start-game";
import { endGame } from "./input-functions/end-game";
import { confirm } from "./helper-functions/confirmation";
import { askBoardSize } from "./input-functions/ask-board-size";
import { generateBoard } from "./board-functions/generate-board";
import { generateDataBoard } from "./board-functions/generate-databoard";
import { generatePlayerBoard } from "./board-functions/generate-playerboard";
import { printBoard } from "./board-functions/print-board";
import { detectHit } from "./game-logic/detect-hit";
import { detectSink } from "./game-logic/detect-sink";
import { getBoardState } from "./game-logic/get-board-state";
import { storeInput } from "./input-functions/store-input";
import { options } from "./input-functions/options-menu";

async function mainBody() {
  //greet user and start game
  const greetResponse = await startGame(
    "Hello, welcome to my Battleship game.",
  );

  //exit game if they don't want to play
  if (greetResponse === false) {
    await endGame("sorry to see you go", "Alright lets do this");
  }

  //select board size
  let boardSize: number;

  while (true) {
    boardSize = await askBoardSize();
    const visibleBoard = generateBoard(boardSize);
    console.table(visibleBoard);

    const confirmed = await confirm(
      `Are you sure ${boardSize} is what you want?`,
    );

    if (confirmed) break;
  }

  //clear and initiate game logic:
  console.clear();
  let dataBoard = generateDataBoard(boardSize);
  let playerBoard = generatePlayerBoard(dataBoard);
  let metaData = getBoardState(playerBoard);

  //process each turn
  while (metaData.remainingLargeShips > 0 && metaData.remainingSmallShips > 0) {
    printBoard(playerBoard, false);
  }

  // console.log(dataBoard);
  // console.log(playerBoard);
  // console.log(metaData);
}

mainBody();
