class Celule {
  isAlive;
  positionX;
  positionY;
  willChange;
  survivorsArroud = 0;
  face;

  constructor(positionX, positionY) {
    this.isAlive = Boolean(Math.floor(Math.random() * 2));
    this.face = this.isAlive ? "😊" : "⬛";
    this.positionX = positionX;
    this.positionY = positionY;
  }

  runSurvivalCheck(table) {
    this.survivorsArroud = 0;
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

    if (this.isAlive) {
      this.survivorsArroud--;
    }

    return this.survivorsArroud;
  }

  runChangeStatus() {
    if (
      this.isAlive &&
      (this.survivorsArroud < 2 || this.survivorsArroud > 3)
    ) {
      this.isAlive = false;
      this.face = this.isAlive ? "😊" : "⬛";
    }

    if (!this.isAlive && this.survivorsArroud === 3) {
      this.isAlive = true;
      this.face = this.isAlive ? "😊" : "⬛";
    }
  }
}

export default Celule;
