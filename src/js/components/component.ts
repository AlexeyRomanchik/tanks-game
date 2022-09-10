import { Coordinates, GameModel } from '../models/index'
import { Dimensions } from './dimensions';

abstract class Component {
    protected _componentDOM: HTMLElement;

    public gameModel: GameModel;
    public dimensions: Dimensions;
    public movementInterval: NodeJS.Timer | null;

    constructor(gameModel: GameModel, dimensions: Dimensions) {
        this._componentDOM = document.createElement('div');
        this.gameModel = gameModel;
        this.dimensions = dimensions;
        this.movementInterval = null;
    }

    public getCoordinates(): Coordinates {
        return this.gameModel.coordinates;
    }

    public getDimensions(): Dimensions {
        return this.dimensions;
    }

    public setPosition(): void {
        const { x, y } = this.gameModel.coordinates;

        this._componentDOM.style.top = `${y}px`;
        this._componentDOM.style.left = `${x}px`;
    }

    public unmount(): void {
        this._componentDOM.remove();

        if (this.movementInterval) {
            clearInterval(this.movementInterval);
        }
    }

    public createComponent(): HTMLElement {
        const { width, height } = this.dimensions;

        this._componentDOM.style.width = `${width}px`;
        this._componentDOM.style.height = `${height}px`;
        this.setPosition();

        return this._componentDOM;
    }
}

export { Component }
