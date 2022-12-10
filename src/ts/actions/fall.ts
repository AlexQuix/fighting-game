import {BaseAction} from "./_core.js";
import {CANVAS_GAME} from "../utils/index.js";

export class FallAction extends BaseAction implements INonControlledAction{
    static actionType:string = "fall";
    public readonly gravity = 0.2;
    public automatic: boolean = true; 
    public eventExists: boolean = true;
    public groundPos:number = CANVAS_GAME.height;
    public spriteState:string = "standing";
    
    hasCollided(){
        let {pos, _sprite} = this.playerInfo;
        let posy = pos.y + _sprite.height;
        return posy >= this.groundPos;
    }
    onstart(): void {
        let {vel} = this.playerInfo;
        vel.setY(this.gravity);
    }
    onanimate(): void {
        let {pos, vel} = this.playerInfo;
        pos.y += vel.y;
        vel.increaseY(this.gravity);
    }
    onend(): void {
        this.playerInfo.vel.resetY();
    }
    oncollision(){
        // this.eventExists = false;
    }
}