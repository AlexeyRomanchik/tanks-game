import { EnemyTankComponent } from '../../components/tank/enemyTankComponent';
import { UserTankComponent } from '../../components/tank/userTankComponent';
import { WallComponent } from '../../components/wallComponent';
import { IObserver } from '../../interfaces/IObserver';
import { GameSettings } from '../gameSettings/gameSettings';
import { createEnemyTanks } from './render/createEnemyTanks';
import { createUserTank } from './render/createUserTank';
import { createWalls } from './render/createWalls';

type gameComponents = {
    wallsComponents: WallComponent[];
    userTank: UserTankComponent;
    enemyTanksComponents: EnemyTankComponent[];
    allGameOgjects: (WallComponent | UserTankComponent | EnemyTankComponent)[];
}

function initializeComponents(gameSettings: GameSettings, destroyObserver: IObserver): gameComponents {
    let wallsComponents = createWalls();
    let userTank = createUserTank(gameSettings, destroyObserver);
    let enemyTanksComponents = createEnemyTanks(gameSettings, destroyObserver);
    let allGameOgjects = [...wallsComponents, ...enemyTanksComponents, userTank];

    return {
        wallsComponents,
        userTank,
        enemyTanksComponents,
        allGameOgjects
    }
}

export { initializeComponents };
