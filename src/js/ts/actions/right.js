import { BaseAction } from "./_core.js";
import { CANVAS_GAME } from "../utils/index.js";
export class MoveRightAction extends BaseAction {
    constructor() {
        super(...arguments);
        this.spriteState = "move";
        this.key = "d";
    }
    addEvent() {
        super.addEvent();
        this.playerInfo.lookDirection = "right";
    }
    setKey(key) {
        this.key = key;
    }
    hasCollided() {
        let { pos: { x } } = this.playerInfo;
        let posx = x + 288;
        return posx >= CANVAS_GAME.width;
    }
    onstart() {
        this.playerInfo._sprite.setState(this.spriteState);
        this.playerInfo.vel.setX(10);
    }
    onanimate() {
        let velX = this.playerInfo.vel.x;
        this.playerInfo.pos.x += velX;
    }
    onend() {
        this.playerInfo._sprite.initState();
        // this.playerInfo.vel.resetX();
    }
}
MoveRightAction.actionType = "right";
