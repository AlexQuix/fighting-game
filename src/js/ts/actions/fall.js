import { BaseAction } from "./_core.js";
import { CANVAS_GAME } from "../utils/index.js";
export class FallAction extends BaseAction {
    constructor() {
        super(...arguments);
        this.gravity = 0.2;
        this.automatic = true;
        this.eventExists = true;
        this.groundPos = CANVAS_GAME.height;
        this.spriteState = "standing";
    }
    hasCollided() {
        let { pos, _sprite } = this.playerInfo;
        let posy = pos.y + _sprite.height;
        return posy >= this.groundPos;
    }
    onstart() {
        let { vel } = this.playerInfo;
        vel.setY(this.gravity);
    }
    onanimate() {
        let { pos, vel } = this.playerInfo;
        pos.y += vel.y;
        vel.increaseY(this.gravity);
    }
    onend() {
        this.playerInfo.vel.resetY();
    }
    oncollision() {
        // this.eventExists = false;
    }
}
FallAction.actionType = "fall";
