import Celule from "./celule/celule.js";

import generateTable from "./generateTable/generateTable.js";
import survivalCheck from "./survivalCheck/survivalCheck.js";
import changeStatus from "./changeStatus/changeStatus.js";

const board = generateTable(26, 57, Celule);

const run = () => {
  survivalCheck(board);
  changeStatus(board);
  const HTMLtable = document.querySelector("table");
  HTMLtable.innerHTML = null;
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("tr");
    HTMLtable.appendChild(row);
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("td");
      row.appendChild(cell);
      cell.innerHTML = board[i][j].face;
    }
  }
};

setInterval(run, 500);
