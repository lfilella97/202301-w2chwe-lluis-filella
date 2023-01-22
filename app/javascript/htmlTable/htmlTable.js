const htmlTable = (board) => {
  const HTMLtable = document.querySelector("table");
  HTMLtable.innerHTML = null;
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("td");
    HTMLtable.appendChild(row);
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("th");
      row.appendChild(cell);
      cell.innerHTML = board[i][j].face;
    }
  }
};

export default htmlTable;
