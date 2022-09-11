
import { Dimensions } from '../../../components/dimensions';
import { blockHeight, blockWidth, gameMap, MAP, MAP_LEGEND } from '../../../components/map/map';
import { EnemyTankComponent } from '../../../components/tank/enemyTankComponent';
import { IObserver } from '../../../interfaces/IObserver';
import { Coordinates } from '../../../models/coordinates';
import { Direction, GameModelType, Tank, TankStats } from '../../../models/index';
import { GameSettings } from '../../gameSettings/gameSettings';

function createEnemyTanks(gameSettings: GameSettings, destroyObserver: IObserver): EnemyTankComponent[] {
    const enemyTanksComponents = [];

    for (let i = 0; i < MAP.length; i++) {
        const mapRow = MAP[i] ?? [];

        for (let j = 0; j < mapRow.length; j++) {
            if (mapRow[j] === MAP_LEGEND.ENEMY_BASE) {
                const enemyTankComponent =
                    createEnemyTankComponent(j, i, gameSettings, destroyObserver);

                enemyTanksComponents.push(enemyTankComponent);
            }
        }
    }

    return enemyTanksComponents;
}

function renderEnemyTank(enemyTankComponent: EnemyTankComponent): void {
    gameMap.append(enemyTankComponent.createComponent())
}

function createEnemyTankComponent(j: number, i: number,
    gameSettings: GameSettings, destroyObserver: IObserver): EnemyTankComponent {
    const { enemyTankHitPoints, enemyTankRecharge,
        enemyTankDamage, tankSpeed, missileSpeed } = gameSettings;

    const x = j * blockWidth;
    const y = i * blockHeight;

    const coordinates = new Coordinates(x, y);
    const tankStats = new TankStats(enemyTankHitPoints, enemyTankRecharge, enemyTankDamage, missileSpeed);
    const tank = new Tank(coordinates, GameModelType.ENEMY_TANK, tankStats, Direction.DOWN, tankSpeed);
    const dimensions = new Dimensions(blockWidth, blockHeight);
    const enemyTankComponent = new EnemyTankComponent(tank, dimensions);
    enemyTankComponent.rotate();
    enemyTankComponent.attach(destroyObserver);

    renderEnemyTank(enemyTankComponent);

    return enemyTankComponent;
}

export { createEnemyTanks, createEnemyTankComponent }
