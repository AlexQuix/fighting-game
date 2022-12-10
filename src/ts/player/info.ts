import {Sprite} from "../sprite.js";
import {Velocity, Damage} from "../utils/index.js";

export class PlayerInfo implements IPlayerInfo, IDamage{
    private _damage = new Damage();
    public _sprite:ISprite;
    public health: number = 200;
    public enemy:IEnemy = {} as IEnemy;
    public vel:IVelocity = new Velocity(0, 0);
    public pos:IPosition = {x:0, y:0};
    public name: string = "Anonimus";

    constructor(
        pos:IPosition, 
        private _character:ICharacter,
        public lookDirection: "right" | "left" = "left"
    ){
        this.pos = pos;
        this._sprite = new Sprite(_character);
    }

    public update(){
        this._sprite.update(this.pos.x, this.pos.y, this.lookDirection);
        let box = this._sprite.getBoxCollision();
        this._damage.update(this.pos.x+box.posx, this.pos.y+box.posy, box.width, this.lookDirection);
    }
    public hasHealth(): boolean {
        return this.health > 0;
    }
    public reduceHealth(damage: number) {
        if(!this.hasHealth()) return;
        this.health -= damage;    
    }

    drawDamage(): void {
        this._damage.draw();
    }
    collisionDamage(posx: number, posy: number, enemyWidth:number): boolean {
        return this._damage.collision(posx, posy, enemyWidth);
    }


    get amountDamage(){
        return this._damage.damage;
    }
    set amountDamage(value:number){
        this._damage.damage = value;
    }
    get directionDamage(){
        return this._damage.direction;
    }
    set directionDamage(value:"right"|"left"){
        this._damage.direction = value;
    }
    get colorDamage(): string{
        return this._damage.fillColor;
    }
    set colorDamage(value:string){
        this._damage.fillColor = value;
    }
    get widthDamage(): number {
        return this._damage.width;
    }
    get heightDamage(): number {
        return this._damage.height;
    }

}