import { GameService } from './../gameService';
import { renderLeftToDestroy, renderLeftToRespawn } from '../../initialization/render/renderGameInfo';
import { GameModelType } from '../../../models/gameModelType';

const MESSAGE_ON_WIN = "Congratulations! You are winner)!";
const MESSAGE_ON_DEFEAT = "Sorry! You lost(";

function update(subject: any, gameService: GameService) {
    if (subject.gameModel.type === GameModelType.ENEMY_TANK) {
        gameService.currentEnemyTanks -= 1;
        renderLeftToDestroy(gameService.currentEnemyTanks)

        if (gameService.currentEnemyTanks > 0) {
            if (gameService.currentEnemyTanks - gameService.startEnemyTanks >= 0) {
                gameService.respawnEnemyTank();
            }

        } else {
            gameService.gameOver(MESSAGE_ON_WIN);
        }
    }

    if (subject.gameModel.type === GameModelType.USER_TANK) {
        gameService.currentUserLives -= 1;
        renderLeftToRespawn(gameService.currentUserLives);

        if (gameService.currentUserLives > 0) {
            gameService.respawnUserTank();
        } else {
            gameService.gameOver(MESSAGE_ON_DEFEAT);
        }
    }
}

export { update }
