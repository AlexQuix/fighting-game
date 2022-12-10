import { BaseAction } from "./_core.js";
export class JumpAction extends BaseAction {
    constructor() {
        super(...arguments);
        this.key = "w";
        this.automatic = true;
        this.displacement = 0;
        this.limitdisplacement = 150;
    }
    setKey(key) {
        this.key = key;
    }
    hasCollided() {
        return this.displacement >= this.limitdisplacement;
    }
    existFallEvent() {
        let { fall } = this.playerAction;
        return fall.eventExists;
    }
    addEvent() {
        if (!this.existFallEvent())
            super.addEvent();
    }
    onstart() {
        if (this.existFallEvent())
            return;
        this.playerInfo.vel.setY(10);
    }
    onanimate() {
        let { vel, pos } = this.playerInfo;
        this.displacement += vel.y;
        let reduceVel = vel.y > 2;
        if (reduceVel)
            vel.decreaseY(-1);
        pos.y -= vel.y;
    }
    onend() {
        this.displacement = 0;
        this.playerInfo.vel.resetY();
    }
    oncollision() {
        let { fall } = this.playerAction;
        fall.addEvent();
    }
}
JumpAction.actionType = "jump";
