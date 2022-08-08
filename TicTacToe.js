/*  Tic Tac Toe (First JS project)
    Carson J
    August 1st, 2022
*/

/*
       1   2   3
A        |   | 
      -----------
B        |   |  
      ----------- 
C        |   |  


*/


// essentially the main function of our little program.
function playTicTacToe() {
    const board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];

    printBoard(board);

    const prompt = require('prompt-sync')();

    let move = prompt("Choose a valid move. To pick a move, type the position of the move. Example: a1 ");


}

// printBoard expects a board in the form of a 2d array which was initialized in playTicTacToe
// This function should print the board and all the moves that have been played so far
// printBoard will return nothing
function printBoard(board) {
    console.log("       1   2   3");
    console.log("A      " + board[0][0] + " | " + board[0][1] + " | " + board[0][2]);
    console.log("      -----------");
    console.log("B      " + board[1][0] + " | " + board[1][1] + " | " + board[1][2]);
    console.log("      -----------");
    console.log("C      " + board[2][0] + " | " + board[2][1] + " | " + board[2][2]);
}


playTicTacToe();