import { GameModelType } from '../models/gameModelType';
import { Wall } from '../models/index';
import { Component } from './component';
import { DestroyableComponent } from './destroyableComponent';
import { Dimensions } from './dimensions';

class WallComponent extends DestroyableComponent {
    constructor(gameModel: Wall, dimensions: Dimensions) {
        super(gameModel, dimensions);
        this._componentDOM.classList.add('wall');
    }

    public static isWall(gameComponent: Component): boolean {
        return gameComponent.gameModel.type === GameModelType.WALL;
    }
}

export { WallComponent }
