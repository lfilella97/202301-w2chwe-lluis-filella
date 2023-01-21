class Celule {
  isAlive;
  positionX;
  positionY;

  constructor(positionX, positionY) {
    this.isAlive = Math.floor(Math.random() * 2);
    this.positionX = positionX;
    this.positionY = positionY;
  }

  runSurvivalCheck(table) {
    let survivorsArroud = 0;
    if (this.isAlive) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (table[this.positionX - i][this.positionY - j].isAlive) {
            survivorsArroud += 1;
          }
        }
      }
    }

    return survivorsArroud;
  }
}

export default Celule;
