
const leftToRespawn: HTMLElement | null = document.querySelector('.left-to-respawn');
const leftToDestroy: HTMLElement | null = document.querySelector('.left-to-destroy');

function renderLeftToRespawn(currentUserLives: number) {
    if (!leftToRespawn) throw new Error('Null reference exeption');

    leftToRespawn.textContent = currentUserLives.toString();
}

function renderLeftToDestroy(currentEnemyTanks: number) {
    if (!leftToDestroy) throw new Error('Null reference exeption');

    leftToDestroy.textContent = currentEnemyTanks.toString();
}

export { renderLeftToRespawn, renderLeftToDestroy }
