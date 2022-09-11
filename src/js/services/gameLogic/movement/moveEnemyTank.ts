
import { tankFire } from '../tankFire';
import { moveComponent } from './moveComponent';
import { rotateTank } from './rotateTank';
import { Component } from '../../../components/component';
import { setCoordinatesOfCollisionObject } from '../collisions/collisions';
import { forbidToCrossBorder } from '../collisions/mapBorders';
import { setRandomDirection } from '../../../util/random';
import { MOVE_STEP } from '../../../models/index';
import { EnemyTankComponent } from '../../../components/tank/enemyTankComponent';

function moveEnemyTanks(enemyTanksComponents: EnemyTankComponent[], gameObjectsComponents: Component[]): void {
    enemyTanksComponents.forEach(enemyTank => {
        moveEnemyTank(enemyTank, gameObjectsComponents);
    });
}

function moveEnemyTank(enemyTank: EnemyTankComponent, collisionComponents: Component[]): void {
    const changeDirectionAfterMove = 30;
    let currnetDirection = enemyTank.gameModel.direction;
    let movies = 0;

    const actionInterval = setInterval(() => {
        movies++;
        tankFire(enemyTank, collisionComponents);

        if (enemyTank.gameModel.direction === currnetDirection) {
            moveComponent(enemyTank, collisionComponents,
                (collisonObject) => {
                    setCoordinatesOfCollisionObject(enemyTank, collisonObject);
                    currnetDirection = setRandomDirection()
                },
                () => {
                    forbidToCrossBorder(enemyTank, currnetDirection);
                    currnetDirection = setRandomDirection()
                },);

        } else rotateTank(enemyTank, currnetDirection);

        if (movies === changeDirectionAfterMove) {
            movies = 0;
            currnetDirection = setRandomDirection();
        }
    }, MOVE_STEP);

    enemyTank.movementInterval = actionInterval;
}

export { moveEnemyTank, moveEnemyTanks }
