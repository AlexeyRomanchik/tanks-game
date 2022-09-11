import '../scss/style.scss';
import { hideModal, initializeModal, level } from './services/menuService/gameMenuService';
import { GameService } from './services/gameService/gameService';
import { GameDifficultyLevels } from './services/gameSettings/gameDifficultyLevels';

const modalForm = document.querySelector('.modal__form');
const gameService = new GameService();

if (!modalForm) throw new Error('Element not found');

modalForm.addEventListener('submit', onStartGame)

initializeModal();

function onStartGame(e: Event) {
    e.preventDefault();
    gameService.startGame(level as GameDifficultyLevels);
    hideModal();
}
