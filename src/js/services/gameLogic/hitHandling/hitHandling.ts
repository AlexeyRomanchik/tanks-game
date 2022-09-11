import { Component } from '../../../components/component';
import { DestroyableComponent } from '../../../components/destroyableComponent';
import { MissileCompnent } from '../../../components/missileComponent';
import { TankComponent } from '../../../components/tank/tankComponent';
import { WallComponent } from '../../../components/wallComponent';
import { destroy } from '../destroyComponent/destroy';

function hitHandling(collisionObject: DestroyableComponent, missileComponent: MissileCompnent,
    collisionComponents: Component[], missleMoveInterval: NodeJS.Timer, currentTank: TankComponent): void {
    if (WallComponent.isWall(collisionObject)) {
        destroy(collisionObject, collisionComponents)
        destroyMissile();
    }

    if (TankComponent.isTank(collisionObject) && collisionObject !== currentTank) {
        const tankComponent = collisionObject as TankComponent;

        if (missileComponent.gameModel.shooterType != tankComponent.gameModel.type) {
            tankComponent.gameModel.setDagage(missileComponent.gameModel.damage);
            tankComponent.setHitPoints();

            if (tankComponent.gameModel.tankStats.hitPoints <= 0)
                destroy(collisionObject, collisionComponents);
        }

        destroyMissile();
    }

    function destroyMissile() {
        missileComponent.destroy();
        clearInterval(missleMoveInterval);
    }
}

export { hitHandling };
