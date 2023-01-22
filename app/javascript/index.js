import Celule from "./celule/celule.js";
import generateTable from "./generateTable/generateTable.js";

const board = generateTable(4, 4, Celule);
console.table(board);
