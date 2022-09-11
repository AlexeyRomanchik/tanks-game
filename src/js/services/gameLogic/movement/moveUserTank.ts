import { Component } from '../../../components/component';
import { UserTankComponent } from '../../../components/tank/userTankComponent';
import { Direction } from '../../../models/index';
import { setCoordinatesOfCollisionObject } from '../collisions/collisions';
import { forbidToCrossBorder } from '../collisions/mapBorders';
import { moveComponent } from './moveComponent';
import { rotateTank } from './rotateTank';

function moveUserTank(tankComponent: UserTankComponent, direction: Direction, collisionComponents: Component[]): void {
    const currentDirection = tankComponent.gameModel.direction;

    if (currentDirection === direction) {
        moveComponent(tankComponent, collisionComponents,
            (collisonObject) => setCoordinatesOfCollisionObject(tankComponent, collisonObject),
            () => forbidToCrossBorder(tankComponent, currentDirection));

    } else rotateTank(tankComponent, direction);
}

export { moveUserTank }
