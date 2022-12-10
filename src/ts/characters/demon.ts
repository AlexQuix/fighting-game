import {AttackAction, MoveLeftAction, MoveRightAction, FallAction, JumpAction} from "../actions/_actions.js";


export class Demon implements ICharacter {
    private imgUrl:string = "/sprites/character/demon.png";
    public state:string = "standing"
    public name:string = "Demon";
    public skills:IClassAction[] = [AttackAction, MoveLeftAction, MoveRightAction, FallAction];
    public sliceW:number = 288;
    public sliceH:number = 160;
    public gapx:number = 120;
    public gapy:number = 80;
    public img:HTMLImageElement;
    public frames:Map<string, IFrameMapValue> = new Map();
    public damageW:number = 200;
    public damageH:number|"all" = "all";
    constructor(){
        this.img = new Image();
        this.img.src = this.imgUrl;
        
        this.frames.set("standing", {delay: 5, posy:0, max:6});
        this.frames.set("move", {delay: 3, posy:1, max:12});
        this.frames.set("attack", {delay: 5, posy:2, max:15});
        this.frames.set("injured", {delay: 5, posy:3, max:5});
        this.frames.set("death", {delay:3, posy:4, max:22});
    }
}