import { Coordinates } from '../../coordinates';
import { GameModelType } from '../../gameModelType';
import { Direction } from '../direction';
import { MovementState } from '../movementState';
import { MovingModel } from '../movingModel';

class Missile extends MovingModel {
    public shooterType: GameModelType;
    public damage: number;

    constructor(coordinates: Coordinates, direction: Direction,
        shooterType: GameModelType, damage: number = 100, speed: number = 20) {
        super(coordinates, GameModelType.MISSILE, direction, speed, MovementState.MOVE);

        this.shooterType = shooterType;
        this.damage = damage;
    }
}

export { Missile }
