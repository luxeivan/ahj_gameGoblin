import img from '../img/goblin.png';
import hammer from '../img/hammer.png';
import gameState from './GameState';

console.log(hammer);
console.log(gameState);

export default class Goblin {
  constructor(gameController) {
    this.gameController = gameController;
    this.gridElem = document.querySelectorAll('.grid__elem');
    this.image = document.createElement('img');
    this.currentNumberElem = 0;
    this.arrayElem = [...this.gridElem];
    this.image.className = 'image';
    this.image.src = img;
    setInterval(() => {
      this.gameController.missed += 1;
      this.generateNumberElem();
      this.arrayElem[this.currentNumberElem].insertBefore(this.image, null);
      if (this.gameController.missed > 5) {
        this.gameController.points = 0;
        this.gameController.missed = 0;
        this.gameController.renderPoint();
        alert('Игра окончена. Больше пяти промохов.');
      }
    }, 1000);
  }

  generateNumberElem() {
    const min = 0;
    const max = 15;
    const numberElem = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.currentNumberElem !== numberElem) {
      this.currentNumberElem = numberElem;
    } else {
      this.generateNumberElem();
    }
  }
}
