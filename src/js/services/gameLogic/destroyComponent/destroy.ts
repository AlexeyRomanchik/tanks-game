import { Component } from '../../../components/component';
import { DestroyableComponent } from '../../../components/destroyableComponent';

function destroy(gameComponent: DestroyableComponent, collisionComponents: Component[]): void {
    gameComponent.destroy();

    const index = collisionComponents.findIndex(item => item.gameModel.id === gameComponent.gameModel.id);
    collisionComponents.splice(index, 1);
}

export { destroy };
