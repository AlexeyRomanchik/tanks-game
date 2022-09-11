
import { Component } from '../../../components/component';
import { MissileCompnent } from '../../../components/missileComponent';
import { TankComponent } from '../../../components/tank/tankComponent';
import { MovementState } from '../../../models/index';
import { collisionHandling } from '../collisions/collisionHandling';

type movingCoponent = TankComponent | MissileCompnent;
type onCollisonCallBack = (collisionObject: Component) => void
type onOutOfMapCallBack = () => void

function moveComponent(component: movingCoponent, collisionComponents: Component[],
    onCollisonCallBack: onCollisonCallBack, onOutOfMapCallBack: onOutOfMapCallBack): void {

    component.gameModel.setMovementState(MovementState.MOVE);
    component.gameModel.move();

    collisionHandling(component, collisionComponents, onCollisonCallBack, onOutOfMapCallBack);

    component.setPosition();
}

export { moveComponent };
