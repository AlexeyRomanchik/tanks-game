import { Dimensions } from '../../../components/dimensions';
import { blockHeight, blockWidth, gameMap, USER_TANK_BASE } from '../../../components/map/map';
import { UserTankComponent } from '../../../components/tank/userTankComponent';
import { IObserver } from '../../../interfaces/IObserver';
import { Coordinates } from '../../../models/coordinates';
import { Direction, GameModelType, Tank, TankStats } from '../../../models/index';
import { GameSettings } from '../../gameSettings/gameSettings';

function createUserTank(gameSettings: GameSettings, destroyObserver: IObserver): UserTankComponent {
    const { userTankHitPoints, userTankRecharge,
        userTankDagame, tankSpeed, missileSpeed } = gameSettings;

    const left = USER_TANK_BASE.x * blockWidth;
    const top = USER_TANK_BASE.y * blockHeight;

    const coordinates = new Coordinates(left, top);
    const tankStats = new TankStats(userTankHitPoints, userTankRecharge, userTankDagame, missileSpeed);
    const tank = new Tank(coordinates, GameModelType.USER_TANK, tankStats, Direction.UP, tankSpeed);

    const dimensions = new Dimensions(blockWidth, blockHeight);
    const tankComponent = new UserTankComponent(tank, dimensions);
    tankComponent.attach(destroyObserver);

    renderUserTank(tankComponent);

    return tankComponent;
}

function renderUserTank(userTank: UserTankComponent): void {
    gameMap.append(userTank.createComponent());
}

export { createUserTank }
