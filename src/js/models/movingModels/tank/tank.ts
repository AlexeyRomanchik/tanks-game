import { Coordinates } from '../../coordinates';
import { GameModelType } from '../../gameModelType';
import { Direction } from '../direction';
import { Missile } from '../missile/missile'; import { MovementState } from '../movementState';
import { MovingModel } from '../movingModel';
import { TankStats } from './tankStats';
import { WeaponState } from './weaponState';

class Tank extends MovingModel {
    public tankStats: TankStats;
    public currentWeaponState: WeaponState;

    constructor(coordinates: Coordinates, type: GameModelType,
        tankStats: TankStats, direction: Direction, speed: number = 1,) {

        super(coordinates, type, direction, speed)
        this.tankStats = tankStats;
        this.currentWeaponState = WeaponState.READY;
    }

    public setDagage(damage: number): void {
        this.tankStats.hitPoints -= damage;
    }

    public fire(): Missile {
        this.currentWeaponState = WeaponState.RECHARGE;
        const coordinates = { ... this.coordinates };

        return new Missile(coordinates, this.direction, this.type, this.tankStats.weaponDamage,
            this.tankStats.missileSpeed);
    }

    public turn(newDirection: Direction): void {
        if (this.moveState === MovementState.TURN) {
            this.direction = newDirection;
        }
    }
}

export { Tank }
