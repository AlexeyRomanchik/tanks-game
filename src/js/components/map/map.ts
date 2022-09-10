type map = readonly number[][];

const MAP: map = [
    [2, 0, 0, 3, 0, 0, 2, 0, 0, 3, 0, 0, 2],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 3, 0, 3, 0, 0, 0, 0, 0]
]

const ENEMY_TANKS_BASE = [
    { x: 0, y: 0 },
    { x: 6, y: 0 },
    { x: 12, y: 0 }
]

const USER_TANK_BASE = { x: 4, y: 13 };

const MAP_LEGEND = {
    PLAYER_BASE: 1,
    ENEMY_BASE: 2,
    WALL: 3
}

if (!MAP[0]) {
    throw new Error('Accessing a member of a type that has a null reference');
}

const GAME_MAP_COLUMNS_COUNT = MAP[0].length;
const GAME_MAP_ROWS_COUNT = MAP.length;

const gameMap = document.querySelector<HTMLElement>("#game-map");

if (!gameMap) {
    throw new Error('Failed to get markup element');
}

const gameMapWidth = gameMap.clientWidth;
const gameMapHeight = gameMap.clientHeight;

const blockWidth = gameMapWidth / GAME_MAP_COLUMNS_COUNT;
const blockHeight = gameMapHeight / GAME_MAP_ROWS_COUNT;

export {
    MAP,
    MAP_LEGEND,
    gameMap,
    gameMapWidth,
    gameMapHeight,
    blockWidth,
    blockHeight,
    ENEMY_TANKS_BASE,
    USER_TANK_BASE
};
