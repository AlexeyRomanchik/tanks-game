import { Component } from '../../../components/component';
import { DestroyableComponent } from '../../../components/destroyableComponent';
import { MissileCompnent } from '../../../components/missileComponent';
import { TankComponent } from '../../../components/tank/tankComponent';
import { MOVE_STEP } from '../../../models/index';
import { hitHandling } from '../hitHandling/hitHandling';
import { moveComponent } from './moveComponent';

function startMoveMissle(missileComponent: MissileCompnent,
    currentTank: TankComponent, collisionComponents: Component[]): void {
    const missleMoveInterval = setInterval(() => {
        moveMissile(missileComponent, missleMoveInterval, collisionComponents, currentTank);
    }, MOVE_STEP)
}

function moveMissile(missileComponent: MissileCompnent, missleMoveInterval: NodeJS.Timer,
    collisionComponents: Component[], currentTank: TankComponent): void {
    moveComponent(missileComponent, collisionComponents,
        (collisionObject) => {
            hitHandling(collisionObject as DestroyableComponent, missileComponent,
                collisionComponents, missleMoveInterval, currentTank);
        },
        () => {
            clearInterval(missleMoveInterval);
            missileComponent.destroy();
        });
}

export { startMoveMissle }
