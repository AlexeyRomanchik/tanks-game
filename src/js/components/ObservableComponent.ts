import { IObservable } from '../interfaces/IObservable';
import { IObserver } from '../interfaces/IObserver';
import { GameModel } from '../models/gameModel';
import { DestroyableComponent } from './destroyableComponent';
import { Dimensions } from './dimensions';

class ObservableComponent extends DestroyableComponent implements IObservable {
    protected _observers: IObserver[];

    constructor(gameModel: GameModel, dimensions: Dimensions) {
        super(gameModel, dimensions);
        this._observers = [];
    }

    public override destroy(): void {
        this.unmount();
        this.notify();
    }

    public attach(observer: IObserver): void {
        const isExist = this._observers.includes(observer);

        if (isExist) {
            throw new Error('Observer has been attached already.');
        }
        this._observers.push(observer);
    }

    public detach(observer: IObserver): void {
        const observerIndex = this._observers.indexOf(observer);

        if (observerIndex === -1) {
            throw new Error('Non existent observer.');
        }
        this._observers.splice(observerIndex, 1);
    }

    public notify(): void {
        for (const observer of this._observers) {
            observer.update(this);
        }
    }
}

export { ObservableComponent }
