import { TankComponent } from './tankComponent';

class UserTankComponent extends TankComponent {
    public override createComponent(): HTMLElement {
        this._componentDOM.classList.add('player-tank');
        return super.createComponent();
    }
}

export { UserTankComponent }
