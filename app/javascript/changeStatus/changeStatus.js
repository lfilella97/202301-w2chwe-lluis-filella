const changeStatus = (board) =>
  board.forEach((row) => row.forEach((cell) => cell.runChangeStatus()));

export default changeStatus;
