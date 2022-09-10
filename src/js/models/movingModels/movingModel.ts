import { GameModel } from '../gameModel';
import { Direction } from './direction';
import { Coordinates } from '../coordinates';
import { GameModelType } from '../gameModelType';
import { MovementState } from './movementState';

abstract class MovingModel extends GameModel {
    public direction: Direction;
    public moveState: MovementState;
    public speed: number;

    constructor(coordinates: Coordinates, type: GameModelType, direction: Direction,
        speed: number = 1, moveState: MovementState = MovementState.NOT_MOVE) {
        super(type, coordinates);
        this.direction = direction;
        this.moveState = moveState;
        this.speed = speed;
    }

    public setMovementState(newMovementState: MovementState): void {
        this.moveState = newMovementState;
    }

    public move(): void {
        if (this.moveState === MovementState.MOVE) {
            switch (this.direction) {
                case Direction.UP:
                    this.coordinates.y -= this.speed
                    break;
                case Direction.DOWN:
                    this.coordinates.y += this.speed;
                    break;
                case Direction.RIGHT:
                    this.coordinates.x += this.speed;
                    break;
                case Direction.LEFT:
                    this.coordinates.x -= this.speed;
                    break;
            }
        }
    }
}

export { MovingModel }
