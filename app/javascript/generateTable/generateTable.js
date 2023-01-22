const generateTable = (columns, rows, Class) => {
  const table = [];
  for (let indexX = 0; indexX <= columns; indexX++) {
    table.push([]);
    for (let indexY = 0; indexY <= rows; indexY++) {
      const item = new Class(indexX, indexY);
      table[indexX][indexY] = item;
    }
  }

  return table;
};

export default generateTable;
