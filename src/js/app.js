import GameController from './GameController';
import Goblin from './Goblin';

const gameController = new GameController();
const goblin = new Goblin(gameController);
goblin.lint = 'lint';
gameController.lint = 'lint';
