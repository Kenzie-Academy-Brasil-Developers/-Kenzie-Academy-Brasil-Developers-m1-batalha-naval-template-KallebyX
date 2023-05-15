// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

const shipPositions = [
  [0, 0],
  [1, 1],
  [2, 3],
  [4, 0],
  [4, 4],
  [2, 2],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    const ocupar2Noarray = [x,y] = shipPositions[i]
    initialBoard[x][y] = 'S'
  }
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for(let i = 0; i < guesses.length; i++) {
    const ocupar2Noarray = [x,y] = guesses[i]
    if (mountedBoard[x][y] === 'S') {
      mountedBoard[x][y] = 'X'
    }
  }
  return mountedBoard
}

function checkWinCondition(guessedBoard) {
  for(let x = 0; x < guessedBoard.length; x++){
    for (let y = 0; y < guessedBoard[x].length; y++){
      if(guessedBoard[x][y] === "S"){
      return false
      }
    }
  }
  return true
}
