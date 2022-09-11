import { Component } from '../../../components/component';
import { Dimensions } from '../../../components/dimensions';
import { blockHeight, blockWidth, gameMap, MAP, MAP_LEGEND } from '../../../components/map/map';
import { WallComponent } from '../../../components/wallComponent';
import { Coordinates } from '../../../models/coordinates';
import { Wall } from '../../../models/index';

function createWalls(): WallComponent[] {
    const wallsComponents = [];

    for (let i = 0; i < MAP.length; i++) {
        const mapRow = MAP[i] ?? [];

        for (let j = 0; j < mapRow.length; j++) {
            if (mapRow[j] === MAP_LEGEND.WALL) {
                const x = j * blockWidth;
                const y = i * blockHeight;

                const coordinates = new Coordinates(x, y)
                const wall = new Wall(coordinates);
                const dimensions = new Dimensions(blockWidth, blockHeight);
                const wallComponent = new WallComponent(wall, dimensions);

                wallsComponents.push(wallComponent);
            }
        }
    }

    renderWalls(gameMap, wallsComponents);

    return wallsComponents;
}

function renderWalls(gameMap: HTMLElement, wallCompnents: Component[]): void {
    wallCompnents.forEach(wallComponent => {
        gameMap.append(wallComponent.createComponent())
    });
}

export { createWalls }
