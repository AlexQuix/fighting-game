import {BaseAction} from "./_core.js";

export class MoveLeftAction extends BaseAction implements IControlledAction{
    static actionType:string = "left";
    public spriteState:string = "move";
    public key: string = "a";

    public addEvent(): void {
        super.addEvent();
        this.playerInfo.lookDirection = "left";
    }
    hasCollided(): boolean{
        let {pos, vel} = this.playerInfo;
        let posx = pos.x + vel.x;
        return posx <= 0;
    }
    setKey(key: string): void {
        this.key = key;
    }
    onstart(): void {
        this.playerInfo._sprite.setState(this.spriteState);
        this.playerInfo.vel.setX(7);
    }
    onanimate(): void {
        let {pos, vel} = this.playerInfo;
        pos.x -= vel.x;
    }
    onend(): void {
        this.playerInfo._sprite.initState();
        // this.playerInfo.vel.resetX();
    }
}