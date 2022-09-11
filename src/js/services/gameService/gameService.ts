import { Component } from '../../components/component';
import { gameMap } from '../../components/map/map';
import { UserTankComponent } from '../../components/tank/userTankComponent';
import { IObserver } from '../../interfaces/IObserver';
import { getRandomEnemyTankBase } from '../../util/random';
import { moveEnemyTank, moveEnemyTanks } from '../gameLogic/movement/moveEnemyTank';
import { GameDifficultyLevels } from '../gameSettings/gameDifficultyLevels';
import { GameSettings, getGameSettings } from '../gameSettings/gameSettings';
import { initializeComponents } from '../initialization/initializeСomponents';
import { createEnemyTankComponent } from '../initialization/render/createEnemyTanks';
import { createUserTank } from '../initialization/render/createUserTank';
import { renderLeftToDestroy, renderLeftToRespawn } from '../initialization/render/renderGameInfo';
import { showModal } from '../menuService/gameMenuService';
import { userTankControl } from '../userTankControl/userTankControl';
import { update } from './gameServiceMethods/update';


export class GameService implements IObserver {
    public gameSettings: GameSettings;
    public currentEnemyTanks: number;
    public currentUserLives: number;
    public startEnemyTanks: number;

    public userTank: UserTankComponent;
    public allGameObjects: Component[];
    private _userTankControl: (e: KeyboardEvent) => void;

    constructor() {
        this.allGameObjects = [];
        this._userTankControl = this._userTankControlHandler.bind(this);

    }

    public startGame(level: GameDifficultyLevels): void {
        this.gameSettings = getGameSettings(level);
        this.currentEnemyTanks = this.gameSettings.enemyTanks;
        this.currentUserLives = this.gameSettings.userLives;
        this.startEnemyTanks = this.gameSettings.startEnemyTanks;

        const components = initializeComponents(this.gameSettings, this);

        this.allGameObjects = components.allGameOgjects;
        this.userTank = components.userTank;

        renderLeftToRespawn(this.currentUserLives);
        renderLeftToDestroy(this.currentEnemyTanks);

        moveEnemyTanks(components.enemyTanksComponents, this.allGameObjects);

        document.addEventListener('keydown', this._userTankControl);
    }

    public update(subject: any): void {
        update(subject, this);
    }

    public respawnEnemyTank(): void {
        const enemyBase = getRandomEnemyTankBase();
        const enemyTankComponent = createEnemyTankComponent(enemyBase.x, enemyBase.y, this.gameSettings, this);

        this.allGameObjects.push(enemyTankComponent);
        moveEnemyTank(enemyTankComponent, this.allGameObjects);
    }

    public respawnUserTank(): void {
        this.userTank = createUserTank(this.gameSettings, this);
        this.allGameObjects.push(this.userTank);
    }

    public gameOver(message: string): void {
        this.clearMap();
        showModal(message);
    }

    public clearMap(): void {
        this.allGameObjects.forEach(element => {
            element.unmount();
        });

        document.removeEventListener('keydown', this._userTankControl);
        gameMap.innerHTML = '';
    }

    private _userTankControlHandler(e: KeyboardEvent): void {
        userTankControl(e.code, this.userTank, this.allGameObjects);
    }
}


