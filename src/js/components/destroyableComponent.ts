import { GameModel } from '../models/gameModel';
import { Component } from './component';
import { Dimensions } from './dimensions';

class DestroyableComponent extends Component {

    constructor(gameModel: GameModel, dimensions: Dimensions) {
        super(gameModel, dimensions);
    }

    public destroy(): void {
        this.unmount();
    }
}

export { DestroyableComponent }
