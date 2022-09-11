import { GameModelType, Tank, WeaponState } from '../../models/index';
import { Component } from '../component';
import { Dimensions } from '../dimensions';
import { MissileCompnent } from '../missileComponent';
import { ObservableComponent } from '../observableComponent';

class TankComponent extends ObservableComponent {
    protected _hitPoints: HTMLElement;
    public override gameModel: Tank;

    constructor(gameModel: Tank, dimensions: Dimensions) {
        super(gameModel, dimensions);
        this._hitPoints = document.createElement('div');
    }

    public rotate(): void {
        this._componentDOM.style.transform =
            `rotate(${this.gameModel.direction * 30}deg)`;
    }

    public fire(): MissileCompnent | null {
        if (this.gameModel.currentWeaponState === WeaponState.READY) {
            const missile = this.gameModel.fire();
            let missileComponent = new MissileCompnent(missile);

            const tankWidth = this.dimensions.width;
            const tankHeight = this.dimensions.height;

            const missileWidth = missileComponent.dimensions.width;
            const missileHeight = missileComponent.dimensions.height;

            missileComponent.gameModel.coordinates.x += (tankWidth - missileWidth) / 2;
            missileComponent.gameModel.coordinates.y += (tankHeight - missileHeight) / 2;

            return missileComponent;
        }

        return null;
    }

    public setDamage(damage: number): void {
        this.gameModel.setDagage(damage);
    }

    public setHitPoints(): void {
        const hitPoints = this.gameModel.tankStats.hitPoints;
        const startHitPoints = this.gameModel.tankStats.startHitPoints;
        const hitPointsWidth = +(hitPoints / startHitPoints).toFixed(2) * 100;

        this._hitPoints.style.width = `${hitPointsWidth}%`
    }

    public override createComponent() {
        this._hitPoints.classList.add('hit-points');
        this.setHitPoints();
        this._componentDOM.append(this._hitPoints);

        return super.createComponent();
    }

    static isTank(gameComponent: Component) {
        const type = gameComponent.gameModel.type;
        return type === GameModelType.ENEMY_TANK || type === GameModelType.USER_TANK;
    }
}

export { TankComponent }
