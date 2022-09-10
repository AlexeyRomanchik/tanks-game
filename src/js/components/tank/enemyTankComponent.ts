import { TankComponent } from './tankComponent';

class EnemyTankComponent extends TankComponent {
    public override createComponent(): HTMLElement {
        this._componentDOM.classList.add('enemy-tank');
        return super.createComponent();
    }
}

export { EnemyTankComponent }
