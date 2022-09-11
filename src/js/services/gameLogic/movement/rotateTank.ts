import { TankComponent } from '../../../components/tank/tankComponent';
import { Direction, MovementState } from '../../../models/index';

function rotateTank(tank: TankComponent, currnetDirection: Direction): void {
    tank.gameModel.setMovementState(MovementState.TURN);
    tank.gameModel.turn(currnetDirection);
    tank.rotate();
}

export { rotateTank }
