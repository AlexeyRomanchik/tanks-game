import { Coordinates } from '../coordinates';
import { GameModel } from '../gameModel';
import { GameModelType } from '../gameModelType';

class Wall extends GameModel {
    constructor(coordinates: Coordinates) {
        super(GameModelType.WALL, coordinates);
    }
}

export { Wall }
