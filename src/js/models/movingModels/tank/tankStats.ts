class TankStats {
    public hitPoints: number;
    public startHitPoints: number;
    public rechargeTime: number;
    public weaponDamage: number;
    public missileSpeed: number;

    constructor(hitPoints: number = 1000, rechargeTime: number = 1000, weaponDamage: number = 200,
        missileSpeed: number = 200) {
        this.hitPoints = hitPoints;
        this.startHitPoints = hitPoints;
        this.rechargeTime = rechargeTime;

        this.weaponDamage = weaponDamage;
        this.missileSpeed = missileSpeed;
    }
}

export { TankStats }
