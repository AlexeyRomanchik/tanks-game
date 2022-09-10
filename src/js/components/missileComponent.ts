import { GameModel } from '../models/gameModel';
import { DestroyableComponent } from './destroyableComponent';
import { Dimensions } from './dimensions';

const missileRadius = 15;

class MissileCompnent extends DestroyableComponent {
    constructor(gameModel: GameModel) {
        const dimensions = new Dimensions(missileRadius, missileRadius);

        super(gameModel, dimensions);
        this._componentDOM.classList.add('missile');
    }

    public override createComponent() {
        this.setPosition();
        return this._componentDOM;
    }
}

export { MissileCompnent }
