import { Component } from '../../../components/component';
import { gameMapHeight, gameMapWidth } from '../../../components/map/map';
import { EnemyTankComponent } from '../../../components/tank/enemyTankComponent';
import { UserTankComponent } from '../../../components/tank/userTankComponent';
import { Direction } from '../../../models/index';

function isGameComponentOutOfMap(gameComponent: Component): boolean {
    const { x, y } = gameComponent.gameModel.coordinates;
    return gameMapWidth - gameComponent.dimensions.width < x || x < 0
        || gameMapHeight - gameComponent.dimensions.height < y || y < 0;
}

type movingComponent = EnemyTankComponent | UserTankComponent;

function forbidToCrossBorder(gameComponent: movingComponent, currentDirection: Direction): void {
    const width = gameComponent.dimensions.width;
    const height = gameComponent.dimensions.height;

    switch (currentDirection) {
        case Direction.UP:
            gameComponent.gameModel.coordinates.y = 0;
            break;
        case Direction.DOWN:
            gameComponent.gameModel.coordinates.y = gameMapHeight - height;
            break;
        case Direction.RIGHT:
            gameComponent.gameModel.coordinates.x = gameMapWidth - width;
            break;
        case Direction.LEFT:
            gameComponent.gameModel.coordinates.x = 0;
            break;
        default:
            break;
    }
}

export { isGameComponentOutOfMap, forbidToCrossBorder }
