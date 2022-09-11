import { ENEMY_TANKS_BASE } from "../components/map/map";
import { Direction } from '../models/index';

type EnemyTankBase = {
    x: number;
    y: number;
}

function setRandomDirection(): Direction {
    const rendom = Math.random() * 3;
    const direction = 3 * Math.round(rendom);

    return direction;
}

function getRandomEnemyTankBase(): EnemyTankBase {
    const index = Math.round(Math.random() * 2);
    const enemyTankBase = ENEMY_TANKS_BASE[index];

    if (!enemyTankBase) throw new Error('Enemy tank base not found')

    return enemyTankBase;
}

export { setRandomDirection, getRandomEnemyTankBase }
