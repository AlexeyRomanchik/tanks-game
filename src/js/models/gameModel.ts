import { GameModelType } from './gameModelType';
import { Coordinates } from './coordinates';
import { IdGenerator } from '../util/idGenerator';

abstract class GameModel {
    public id: number;
    public type: GameModelType
    public coordinates: Coordinates

    constructor(type: GameModelType, coordinates: Coordinates) {
        const idGenerator = IdGenerator.getInstance();

        this.id = idGenerator.generateId();
        this.type = type;
        this.coordinates = coordinates;
    }
}

export { GameModel }
