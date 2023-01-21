class Celule {
  isAlive;
  positionX;
  positionY;

  constructor(positionX, positionY) {
    this.isAlive = Boolean(Math.floor(Math.random() * 2));
    this.positionX = positionX;
    this.positionY = positionY;
  }

  runSurvivalCheck(table) {
    let survivorsArroud = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          table[this.positionX + i][this.positionY + j] &&
          table[this.positionX + i][this.positionY + j].isAlive
        ) {
          survivorsArroud++;
        }
      }
    }

    return survivorsArroud;
  }
}

export default Celule;
