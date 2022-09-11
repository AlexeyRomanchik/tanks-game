import { ENEMY_TANKS_BASE } from "../components/map/map";
import { Direction } from '../models/index';

function setRandomDirection(): Direction {
    const rendom = Math.random() * 3;
    const direction = 3 * Math.round(rendom);

    return direction;
}

function getRandomEnemyTankBase() {
    const index = Math.round(Math.random() * 2);
    return ENEMY_TANKS_BASE[index];
}

export { setRandomDirection, getRandomEnemyTankBase }
