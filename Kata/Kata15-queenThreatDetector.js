const generateBoard = (whiteQueen, blackQueen) => {
  let initBoard = [];
  for (let i = 0; i < 8; i++) {
    initBoard[i] = [];
    for (let j = 0; j < 8; j++) {
      initBoard[i][j] = 0;
    }
  }
  let editBoard = initBoard;
  editBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  editBoard[blackQueen[0]][blackQueen[1]] = 1;

  return editBoard;
}

const queenThreat = board => {
  let queen = [];
  let k = 0;
  //find the positions of the 2 queens
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        queen[k] = [i, j];
        k++;
      }
    }
  }

  //check if the 2 queens attack each other
  if ((queen[1][0] === queen[0][0]) ||
    (queen[0][1] === queen[1][1]) ||
    (Math.abs(queen[0][0] - queen[0][1])) === Math.abs(queen[1][0] - queen[1][1])
  ) {
    return true;
  } else {
    return false;
  }

}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));