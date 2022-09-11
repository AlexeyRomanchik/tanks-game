import { Component } from '../../components/component';
import { UserTankComponent } from '../../components/tank/userTankComponent';
import { Direction } from '../../models/index';
import { moveUserTank } from '../gameLogic/movement/moveUserTank';
import { tankFire } from '../gameLogic/tankFire';

function userTankControl(keyCode: string, tankComponent: UserTankComponent, collisionComponents: Component[]): void {
    switch (keyCode) {
        case 'ArrowUp':
        case 'KeyW':
            moveUserTank(tankComponent, Direction.UP, collisionComponents);
            break;
        case 'ArrowDown':
        case 'KeyS':
            moveUserTank(tankComponent, Direction.DOWN, collisionComponents);
            break;
        case 'ArrowRight':
        case 'KeyD':
            moveUserTank(tankComponent, Direction.RIGHT, collisionComponents);
            break;
        case 'ArrowLeft':
        case 'KeyA':
            moveUserTank(tankComponent, Direction.LEFT, collisionComponents);
            break;
        case 'Space':
            tankFire(tankComponent, collisionComponents); break;
    }
}

export { userTankControl }
