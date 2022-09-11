import { GameDifficultyLevels } from './gameDifficultyLevels';

const START_ENEMY_TANKS = 3;
const ENEMY_TANKS = 10;
const ENEMY_TANK_HIT_POINTS = 1000;
const ENEMY_TANK_DAMAGE = 300;
const ENEMY_TANK_RECHARGE = 3000;

const USER_TANK_HIT_POINTS = 3000;
const USER_TANK_DAMAGE = 600;
const USER_TANK_RECHARGE = 1000;
const USER_LIVES = 5;

const TANK_SPEED = 5;
const MISSILE_SPEED = 16;

class GameSettings {
	public enemyTanks: number;
	public enemyTankHitPoints: number;
	public enemyTankDamage: number;
	public enemyTankRecharge: number;
	public tankSpeed: number;
	public missileSpeed: number;
	public startEnemyTanks: number;
	public userTankHitPoints: number;
	public userTankDagame: number;
	public userTankRecharge: number;
	public userLives: number;

	constructor(gameDifficultyLevels: GameDifficultyLevels) {
		this.enemyTanks = ENEMY_TANKS * gameDifficultyLevels;
		this.enemyTankHitPoints = ENEMY_TANK_HIT_POINTS * gameDifficultyLevels;
		this.enemyTankDamage = ENEMY_TANK_DAMAGE * gameDifficultyLevels;
		this.enemyTankRecharge = ENEMY_TANK_RECHARGE / gameDifficultyLevels;

		this.userTankHitPoints = USER_TANK_HIT_POINTS / gameDifficultyLevels;
		this.userTankDagame = USER_TANK_DAMAGE / gameDifficultyLevels;
		this.userTankRecharge = USER_TANK_RECHARGE;
		this.userLives = USER_LIVES;

		this.tankSpeed = TANK_SPEED;
		this.missileSpeed = MISSILE_SPEED;
		this.startEnemyTanks = START_ENEMY_TANKS;
	}
}

export { GameSettings }
