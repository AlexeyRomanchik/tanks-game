import { StorageService } from '../storageService/storageService';
import { GameDifficultyLevels } from '../gameSettings/gameDifficultyLevels';

const startMessage = 'Welcome to the game';
const startButtonMessage = 'Start game';

const modal = document.querySelector('.modal');
const modalFormTitle = document.querySelector('.modal__form-title');
const modalFormLevelOptions = document.querySelector('.modal__form-level-options');
const startGameButton = document.querySelector<HTMLButtonElement>('.modal__form-start-game');
const storageService = new StorageService();

let level = storageService.getItem('level') ?? GameDifficultyLevels.easy;

function initializeModal(): void {
    if (modalFormLevelOptions && startGameButton && modalFormTitle) {
        modalFormLevelOptions.addEventListener('change', setLevel);

        startGameButton.value = startButtonMessage;
        modalFormTitle.textContent = startMessage;

        for (let key in GameDifficultyLevels) {
            const selected = GameDifficultyLevels[key] === level ? 'selected' : '';

            modalFormLevelOptions.innerHTML +=
                `<option ${selected} value="${GameDifficultyLevels[key]}">${key}</option>`;
        }
    }

    showModal();
}

function setLevel(e: Event): void {
    level = +(e.target as HTMLSelectElement).value;
    storageService.setItem('level', level);
}

function showModal(message: string = startMessage): void {
    if (modal && modalFormTitle) {
        modal.classList.remove('modal-hide');
        document.body.style.overflow = "hidden";

        modalFormTitle.textContent = message;
    }
}

function hideModal(): void {
    if (modal) {
        modal.classList.add('modal-hide');
        document.body.style.overflow = "";
    }
}

export {
    initializeModal,
    level,
    showModal,
    hideModal
}
