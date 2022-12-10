import {BaseAction} from "./_core.js";

export class AttackAction extends BaseAction implements IControlledAction{
    static actionType:string = "attack";
    public key: string = "e";
    public spriteState:string = "attack";

    setKey(key: string): void {
        this.key = key;
    }
    hasCollided(){
        let {pos, _sprite} = this.playerInfo.enemy;
        let box = _sprite.getBoxCollision();
        let posx = pos.x;
        let posy = pos.y;
        return this.playerInfo.collisionDamage(posx, posy, box.width);
    }
    onstart(): void {
        this.playerInfo._sprite.setState(this.spriteState);
    }
    onanimate(): void {
        this.playerInfo.drawDamage();
    }
    onend(): void {
        this.playerInfo._sprite.initState();
    }
    oncollision(){
        let {enemy} = this.playerInfo;
        if(enemy.health > 0) return enemy.reduceHealth(5);
        console.log(`Game over: ${enemy.name}`);
    }
}
