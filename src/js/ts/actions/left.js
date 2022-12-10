import { BaseAction } from "./_core.js";
export class MoveLeftAction extends BaseAction {
    constructor() {
        super(...arguments);
        this.spriteState = "move";
        this.key = "a";
    }
    addEvent() {
        super.addEvent();
        this.playerInfo.lookDirection = "left";
    }
    hasCollided() {
        let { pos, vel } = this.playerInfo;
        let posx = pos.x + vel.x;
        return posx <= 0;
    }
    setKey(key) {
        this.key = key;
    }
    onstart() {
        this.playerInfo._sprite.setState(this.spriteState);
        this.playerInfo.vel.setX(7);
    }
    onanimate() {
        let { pos, vel } = this.playerInfo;
        pos.x -= vel.x;
    }
    onend() {
        this.playerInfo._sprite.initState();
        // this.playerInfo.vel.resetX();
    }
}
MoveLeftAction.actionType = "left";
