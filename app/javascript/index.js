import Celule from "./Celule/Celule.js";
import generateTable from "./generateTable/generateTable.js";
import survivalCheck from "./survivalCheck/survivalCheck.js";
import changeStatus from "./changeStatus/changeStatus.js";
import htmlTable from "./htmlTable/htmlTable.js";

const board = generateTable(
  (26 * 864) / screen.height,
  (56 * 1536) / screen.width,
  Celule
);

const startGame = () => {
  survivalCheck(board);
  changeStatus(board);
  htmlTable(board);
};

setInterval(startGame, 500);
