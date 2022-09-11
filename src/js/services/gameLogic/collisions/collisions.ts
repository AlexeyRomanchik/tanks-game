import { Component } from '../../../components/component';
import { EnemyTankComponent } from '../../../components/tank/enemyTankComponent';
import { UserTankComponent } from '../../../components/tank/userTankComponent';
import { Direction } from '../../../models/index';

function isCollision(gameObjectA: Component, gameObjectB: Component): boolean {
    if (isSameObject(gameObjectA, gameObjectB)) return false;

    const { x: xA, y: yA } = gameObjectA.getCoordinates();
    const { x: xB, y: yB } = gameObjectB.getCoordinates();

    const { width: widthB, height: heightB } = gameObjectB.getDimensions();
    const { width: widthA, height: heightA } = gameObjectA.getDimensions();

    return (Math.abs((xB + widthB) - (widthA + xA)) + Math.abs(xB - xA) < (widthA + widthB) &&
        Math.abs((yB + heightB) - (heightA + yA)) + Math.abs(yB - yA) < (heightA + heightB));
}

function getCollisionObject(currentGameObject: Component, allGameObjects: Component[]): Component | null {
    for (let gameObject of allGameObjects) {
        if (isCollision(currentGameObject, gameObject)) {
            return gameObject;
        }
    }

    return null;
}

function isSameObject(gameObjectA: Component, gameObjectB: Component): boolean {
    return gameObjectA.gameModel.id === gameObjectB.gameModel.id;
}

type tankComponent = UserTankComponent | EnemyTankComponent;

function setCoordinatesOfCollisionObject(gameObject: tankComponent, collisionObject: Component): void {
    const width = gameObject.dimensions.width;
    const height = gameObject.dimensions.height;

    switch (gameObject.gameModel.direction) {
        case Direction.UP:
            gameObject.gameModel.coordinates.y = collisionObject.gameModel.coordinates.y + height;
            break;
        case Direction.DOWN:
            gameObject.gameModel.coordinates.y = collisionObject.gameModel.coordinates.y - height;
            break;
        case Direction.RIGHT:
            gameObject.gameModel.coordinates.x = collisionObject.gameModel.coordinates.x - width;
            break;
        case Direction.LEFT:
            gameObject.gameModel.coordinates.x = collisionObject.gameModel.coordinates.x + width;
            break;
        default:
            break;
    }
}

export { isCollision, getCollisionObject, setCoordinatesOfCollisionObject }
