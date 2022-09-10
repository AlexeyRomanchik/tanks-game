import { Missile } from '../models/index';
import { DestroyableComponent } from './destroyableComponent';
import { Dimensions } from './dimensions';

const missileRadius = 15;

class MissileCompnent extends DestroyableComponent {
    public override gameModel: Missile;

    constructor(gameModel: Missile) {
        const dimensions = new Dimensions(missileRadius, missileRadius);
        super(gameModel, dimensions);

        this.gameModel = gameModel;
        this._componentDOM.classList.add('missile');
    }

    public override createComponent() {
        this.setPosition();
        return this._componentDOM;
    }
}

export { MissileCompnent }
