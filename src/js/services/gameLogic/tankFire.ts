import { Component } from '../../components/component';
import { gameMap } from '../../components/map/map';
import { TankComponent } from '../../components/tank/tankComponent';
import { WeaponState } from '../../models/index';

import { startMoveMissle } from './movement/moveMissile';

function tankFire(tankComponent: TankComponent, collisionComponents: Component[]) {
    if (tankComponent.gameModel.currentWeaponState === WeaponState.READY) {
        const missileComponent = tankComponent.fire();

        if (missileComponent) {
            gameMap.append(missileComponent.createComponent());
            startMoveMissle(missileComponent, tankComponent, collisionComponents)
        }

        setTimeout(() => {
            tankComponent.gameModel.currentWeaponState = WeaponState.READY;
        }, tankComponent.gameModel.tankStats.rechargeTime);
    }
}

export { tankFire };
