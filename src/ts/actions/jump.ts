import {BaseAction} from "./_core.js";

export class JumpAction extends BaseAction implements IJumpAction{
    static actionType:string = "jump";
    public key: string = "w";
    public automatic: boolean = true;
    private displacement: number = 0;
    private limitdisplacement: number = 150;

    public setKey(key: string): void {
        this.key = key;
    }
    public hasCollided(){
        return this.displacement >= this.limitdisplacement;
    }

    existFallEvent():boolean{
        let {fall} = this.playerAction;
        return fall.eventExists;
    }
    addEvent(): void {
        if(!this.existFallEvent()) super.addEvent();
    }
    onstart(): void {
        if(this.existFallEvent()) return;
        this.playerInfo.vel.setY(10);
    }
    onanimate(): void {
        let {vel, pos} = this.playerInfo;
        this.displacement += vel.y;

        let reduceVel = vel.y > 2;
        if(reduceVel) vel.decreaseY(-1);
        pos.y -= vel.y;
    }
    onend(): void {
        this.displacement = 0;
        this.playerInfo.vel.resetY();
    }
    oncollision(){
        let {fall} = this.playerAction;
        fall.addEvent();
    }
}