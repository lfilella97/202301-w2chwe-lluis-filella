const survivalCheck = (board) =>
  board.forEach((row) => row.forEach((cell) => cell.runSurvivalCheck(board)));

export default survivalCheck;
