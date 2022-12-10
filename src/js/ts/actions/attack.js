import { BaseAction } from "./_core.js";
export class AttackAction extends BaseAction {
    constructor() {
        super(...arguments);
        this.key = "e";
        this.spriteState = "attack";
    }
    setKey(key) {
        this.key = key;
    }
    hasCollided() {
        let { pos, _sprite } = this.playerInfo.enemy;
        let box = _sprite.getBoxCollision();
        let posx = pos.x;
        let posy = pos.y;
        return this.playerInfo.collisionDamage(posx, posy, box.width);
    }
    onstart() {
        this.playerInfo._sprite.setState(this.spriteState);
    }
    onanimate() {
        this.playerInfo.drawDamage();
    }
    onend() {
        this.playerInfo._sprite.initState();
    }
    oncollision() {
        let { enemy } = this.playerInfo;
        if (enemy.health > 0)
            return enemy.reduceHealth(5);
        console.log(`Game over: ${enemy.name}`);
    }
}
AttackAction.actionType = "attack";
