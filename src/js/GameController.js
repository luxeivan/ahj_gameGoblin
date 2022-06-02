export default class GameController {
    constructor() {
        this.points = 0;
        this.errorClick = 0;
        this.pointArea = document.querySelector('.count_point');
        this.grid = document.querySelector('.grid');
        this.grid.addEventListener('click', this.addPoint.bind(this));
        this.renderPoint();
    }
    addPoint(event) {
        if (event.target.tagName === 'IMG') {
            this.points++;
            this.renderPoint();
            event.target.remove();
        } else {
            this.errorClick++;
            if (this.errorClick == 5) {
                this.points = 0;
                this.errorClick = 0;
                alert('Игра окончена. Больше пяти промохов.');
                this.renderPoint();
            }
        }
    }
    renderPoint() {
        this.pointArea.innerText = this.points;
    }
}