import {GAME_CONTEXT} from "./utils/index.js";

class BoxCollision{
    public width:number;
    public height:number;
    public posx:number;
    public posy:number;
    constructor(gapx:number, gapy:number, scale:number, width:number, height:number){
        this.width = width - ((gapx*2)*scale);
        this.height = height - (gapy*scale);
        this.posx = gapx*scale;
        this.posy = gapy*scale;
    }
}
export class Sprite implements ISprite{
    private ctx = GAME_CONTEXT;
    private state:string = "standing";
    public currframeX:number = 1;
    public countFrames:number = 0;
    public scale:number = 2.5;
    public width:number;
    public height:number;
    public sliceX:number;
    public sliceY:number;
    public configFrame:IFrameMapValue = {} as IFrameMapValue;
    private _box:IBoxCollision;
    constructor(
        private readonly _chtr:ICharacter
    ){
        this.width = _chtr.sliceW*this.scale;
        this.height = _chtr.sliceH*this.scale;
        this.sliceX = 0;
        this.sliceY = 0;
        this._box = new BoxCollision(_chtr.gapx, _chtr.gapy, this.scale, this.width, this.height);
        this.initState();
    }
    private draw(posx:number, posy:number, direct:"right"|"left"){
        if(direct === "right") return this.flipImage(posx, posy);
        this.ctx.drawImage(this._chtr.img, this.sliceX, this.sliceY, this._chtr.sliceW, this._chtr.sliceH, posx, posy, this.width, this.height);
    }
    private flipImage(posx:number, posy:number){
        this.ctx.translate(posx+this.width, posy);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this._chtr.img, this.sliceX, this.sliceY, this._chtr.sliceW, this._chtr.sliceH, 0, 0, this.width, this.height);
        this.ctx.setTransform(1,0,0,1,0,0);
    }
    initState(){
        this.state = "standing";
        this.configFrame = this.findConfigFrame() as IFrameMapValue;
        this.changeSliceY();
        this.countFrames = 0;
        this.currframeX = 1;
    }
    setState(state:string){
        if(this.state === state) return;
        this.state = state;
        let config = this.findConfigFrame();
        if(!config) return this.initState();
        this.configFrame = config;
        this.changeSliceY();
        this.countFrames = 0;
        this.currframeX = 1;
    }
    changeSliceY(){
        this.sliceY = this._chtr.sliceH * this.configFrame.posy;
    }
    findConfigFrame(){
        return this._chtr.frames.get(this.state);
    }
    updateFrame(){
        this.countFrames += 1;
        if(this.currframeX === this.configFrame.max) this.currframeX = 1;
        if(this.countFrames > this.configFrame.delay){
            this.sliceX = this._chtr.sliceW * this.currframeX;
            this.countFrames = 0;
            this.currframeX += 1;
        }
    }
    update(posx:number, posy:number, lookDirec:"right"|"left"){
        this.updateFrame();
        this.draw(posx, posy, lookDirec);
    }

    get gap(){
        return {x:this._chtr.gapx, y:this._chtr.gapy}
    }
    getBoxCollision():IBoxCollision{
        return this._box;
    }
}