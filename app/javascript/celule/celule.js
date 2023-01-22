class Celule {
  me;
  isAlive;
  positionX;
  positionY;
  willChange;
  survivorsArroud = 0;

  constructor(positionX, positionY) {
    this.isAlive = true;
    this.face = this.isAlive ? "X" : "O";
    this.positionX = positionX;
    this.positionY = positionY;
    this.me = this;
  }

  runSurvivalCheck(table) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          table[this.positionX + i] &&
          table[this.positionX + i][this.positionY + j] &&
          table[this.positionX + i][this.positionY + j].isAlive
        ) {
          this.survivorsArroud++;
        }
      }
    }

    return this.survivorsArroud;
  }
}

export default Celule;
