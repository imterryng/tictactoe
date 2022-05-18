/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
const prompt = require('prompt-sync')({sigint: true});
const assert = require('assert');

// The board object used to save the current status of a gameplay
let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
  board[position] = mark;
}

// TODO: print the game board as described at the top of this code skeleton
// Will not be tested in Part 1
function printBoard() {

  let pos1 = 1;
  let pos2 = 2;
  let pos3 = 3;
  let pos4 = 4;
  let pos5 = 5;
  let pos6 = 6;
  let pos7 = 7;
  let pos8 = 8;
  let pos9 = 9;


  if(board[1] === "X" || board[1] === "O"){
    pos1= board[1];
  }
  if(board[2] === "X" || board[2] === "O"){
    pos2= board[2];
  }
  if(board[3] === "X" || board[3] === "O"){
    pos3= board[3];
  }
  if(board[4] === "X" || board[4] === "O"){
    pos4= board[4];
  }
  if(board[5] === "X" || board[5] === "O"){
    pos5= board[5];
  }
  if(board[6] === "X" || board[6] === "O"){
    pos6= board[6];
  }
  if(board[7] === "X" || board[7] === "O"){
    pos7= board[7];
  }
  if(board[8] === "X" || board[8] === "O"){
    pos8= board[8];
  }
  if(board[9] === "X" || board[9] === "O"){
    pos9= board[9];
  }

  console.log("\n" +
      pos1
      + " | "
      + pos2
      + " | "
      + pos3
      + "\n"
      + ' --------- \n'
      + pos4
      + " | "
      + pos5
      + " | "
      + pos6
      + "\n"
      + ' --------- \n'
      + pos7
      + " | "
      + pos8
      + " | "
      + pos9
      + "\n");
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
// position is an input String
function validateMove(position) {
  let usedBoardArray = [];
  let unusedBoardArray = [1,2,3,4,5,6,7,8,9];

  // Check for used and unused numbers
  for(let i = 1 ; i < 10 ; i++){
    if(board[i] === "O" || board[i] === "X"){
      usedBoardArray.push(i)
      let numberLocation = unusedBoardArray.indexOf(i);
      unusedBoardArray.splice(numberLocation,1);
    }
  }

  // Return true and false for value of position
  if (unusedBoardArray.includes(parseInt(position)) === true){
    return true;
  } else if (usedBoardArray.includes(parseInt(position)) === true){
    return false;
  } else {
    return false;
  }
}


// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
  [1,2,3],//[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1],
  [4,5,6],//[4,6,5],[5,4,6],[5,6,4],[6,4,5],[6,5,4],
  [7,8,9],//[7,9,8],[8,7,9],[8,9,7],[9,8,7],[9,7,8],
  [1,4,7],//[1,7,4],[4,7,1],[4,1,7],[7,1,4],[7,4,1],
  [2,5,8],//[2,8,5],[5,8,2],[5,2,8],[8,5,2],[8,2,5],
  [3,6,9],//[3,9,6],[6,3,9],[6,9,3],[9,6,3],[9,3,6],
  [1,5,9],//[1,9,5],[5,9,1],[5,1,9],[9,5,1],[9,1,5],
  [3,5,7]//,[3,7,5],[5,7,3],[5,3,7],[7,5,3],[7,3,5],
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {

  let winArray = [];
  let winningPlayer;

  let winner = true;

  // Checking the board and compare to the winning combinations
  // for(let i = 0 ; i < winCombinations.length; i++){
  //   for(let v = 0 ; v < 3 ; v++){
  //     if(board[winCombinations[i][v]] === player){
  //       winArray.push(true);
  //       //Check for winning array if condition of winning is already met
  //       if(winArray[0] === true && winArray[1] === true && winArray[2] === true){
  //         winningPlayer = player;
  //       };
  //     } else {
  //       winArray = [];
  //     };
  //   };
  // };

  for(let i = 0 ; i < winCombinations.length ; i++){
    let v = 0;
    while(winner === true && v < 3){
      if(board[winCombinations[i][v]] !== player){
        winner = false;
      };
      v++;
    }
    if(winner === true){
      return winner;
    } else {
      if(i < 7){
        winner = true;
      } else {
        return winner
      }
    }
  }

  // console.log(winCombinations[3][1]);

  //If winning conditiion is met, declare current player as winner for being true
  // if(winningPlayer === player){
  //   return true
  // } else {
  //   return false
  // }
}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {

  let boardArray = [];
  let boardFull = 1;

  //Check if there are any blanks in the board
  let i = 1;
  while(boardFull === 1 && i < 10){
    if(board[i] === " "){
      boardFull = 0;
    };
    i++;
  }

  //Return true is board is full
  if(boardFull === 1){
    return true
  } else {
    return false
  }
};

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {

  //Game has already started
  gameStart = false;

  //Prompt for player input
  let playerChoice = prompt(currentTurnPlayer + "'s turn, input:");

  //Validate input is correct. Ask player to try again if error, continue if input is correct
  let inputValidity = validateMove(playerChoice);
  while(!inputValidity){
    console.log("Your input is invalid. Please try again.");
    playerChoice = prompt(currentTurnPlayer + "'s turn, input:");
    inputValidity = validateMove(playerChoice);
  }

  //Mark and print the board with the choice
  markBoard(playerChoice,currentTurnPlayer);
  printBoard();

  //Check if current player has won. Declare winner if player wins, continue if doesn't
  if(checkWin(currentTurnPlayer) === true){
    winnerIdentified = true;
    console.log("Congratulation! " + currentTurnPlayer + " has won!")
    let playerRespondToRestart = prompt("Do you want to play another game? Y/N")

    if(playerRespondToRestart === "Y"){
      restartGame(true);
    }
  } else {

    //Check if the board is full. Declare draw if it is, continue if it isn't
    if(checkFull() === true){
      winnerIdentified = true;
      console.log("Game is a draw.")
      let playerRespondToRestart = prompt("Do you want to play another game? Y/N")

      if(playerRespondToRestart === "Y"){
        restartGame(true);
      }
    }
  };

  //Change player after every turn
  if(currentTurnPlayer === "X"){
    currentTurnPlayer = "O";
  } else {
    currentTurnPlayer = "X";
  }

}

// entry point of the whole program
let winnerIdentified = false
let currentTurnPlayer = 'X'
let gameStart = true;

restartGame(gameStart)

while (!winnerIdentified){
  playTurn(currentTurnPlayer);
}

// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
function restartGame(input){

  if(input === true){
    winnerIdentified = false;
    currentTurnPlayer = "X";
    gameStart = true;

    //Relog empty board
    console.log('Game started: \n\n' +
        ' 1 | 2 | 3 \n' +
        ' --------- \n' +
        ' 4 | 5 | 6 \n' +
        ' --------- \n' +
        ' 7 | 8 | 9 \n');

    //Reset board object
    board = {
        1: ' ',
        2: ' ',
        3: ' ',
        4: ' ',
        5: ' ',
        6: ' ',
        7: ' ',
        8: ' ',
        9: ' '
    };
    playTurn(currentTurnPlayer);
  }
}
