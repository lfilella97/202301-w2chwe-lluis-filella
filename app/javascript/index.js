import Celule from "./celule/celule.js";
import iterateBoardShowFace from "./iterateBoardShowFace/iterateBoardShowFace.js";
import generateTable from "./generateTable/generateTable.js";
import survivalCheck from "./survivalCheck/survivalCheck.js";
import changeStatus from "./changeStatus/changeStatus.js";

const board = generateTable(20, 20, Celule);

console.table(board);
console.table(iterateBoardShowFace(board));

const run = () => {
  survivalCheck(board);
  changeStatus(board);
  console.table(iterateBoardShowFace(board));
};

setInterval(run, 500);
