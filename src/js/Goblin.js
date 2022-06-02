import img from '../img/goblin.png';
import hammer from '../img/hammer.png';

console.log(hammer);

export default class Goblin {
  constructor() {
    this.gridElem = document.querySelectorAll('.grid__elem');
    this.image = document.createElement('img');
    this.currentNumberElem = 0;
    this.arrayElem = [...this.gridElem];
    this.image.className = 'image';
    this.image.src = img;
    setInterval(() => {
      this.generateNumberElem();
      this.arrayElem[this.currentNumberElem].insertBefore(this.image, null);
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
