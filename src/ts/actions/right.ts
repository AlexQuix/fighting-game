import {BaseAction} from "./_core.js";
import {CANVAS_GAME} from "../utils/index.js";

export class MoveRightAction extends BaseAction implements IControlledAction{
    static actionType:string = "right";
    public spriteState:string = "move";
    public key: string = "d";

    public addEvent(): void {
        super.addEvent();
        this.playerInfo.lookDirection = "right";
    }
    setKey(key: string): void {
        this.key = key;
    }
    hasCollided(): boolean {
        let {pos:{x}} = this.playerInfo;
        let posx = x + 288;
        return posx >= CANVAS_GAME.width;
    }
    onstart(): void {
        this.playerInfo._sprite.setState(this.spriteState);
        this.playerInfo.vel.setX(10);
    }
    onanimate(): void {
        let velX = this.playerInfo.vel.x;
        this.playerInfo.pos.x += velX;
    }
    onend(): void {
        this.playerInfo._sprite.initState();
        // this.playerInfo.vel.resetX();
    }
}
