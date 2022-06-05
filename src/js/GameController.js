export default class GameController {
  constructor() {
    this.points = 0;
    this.missed = 0;
    this.pointArea = document.querySelector('.count_point');
    this.grid = document.querySelector('.grid');
    this.grid.addEventListener('click', this.addPoint.bind(this));
    this.renderPoint();
  }

  addPoint(event) {
    if (event.target.tagName === 'IMG') {
      this.missed -= 1;
      this.points += 1;
      this.renderPoint();
      event.target.remove();
    } 
  }

  renderPoint() {
    this.pointArea.innerText = this.points;
  }
}
