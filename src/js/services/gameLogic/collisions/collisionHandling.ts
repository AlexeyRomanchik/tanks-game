import { Component } from '../../../components/component';
import { getCollisionObject } from './collisions';
import { isGameComponentOutOfMap } from './mapBorders';

type onCollisonCallBack = (collisionObject: Component) => void
type onOutOfMapCallBack = () => void

function collisionHandling(component: Component, collisionComponents: Component[],
    onCollisonCallBack?: onCollisonCallBack, onOutOfMapCallBack?: onOutOfMapCallBack): void {
    const collisionObject = getCollisionObject(component, collisionComponents);

    if (collisionObject)
        onCollisonCallBack?.call(null, collisionObject);

    if (isGameComponentOutOfMap(component))
        onOutOfMapCallBack?.call(null);
}

export { collisionHandling }

