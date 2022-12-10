import { GAME_CONTEXT } from "./utils/index.js";
class BoxCollision {
    constructor(gapx, gapy, scale, width, height) {
        this.width = width - ((gapx * 2) * scale);
        this.height = height - (gapy * scale);
        this.posx = gapx * scale;
        this.posy = gapy * scale;
    }
}
export class Sprite {
    constructor(_chtr) {
        this._chtr = _chtr;
        this.ctx = GAME_CONTEXT;
        this.state = "standing";
        this.currframeX = 1;
        this.countFrames = 0;
        this.scale = 2.5;
        this.configFrame = {};
        this.width = _chtr.sliceW * this.scale;
        this.height = _chtr.sliceH * this.scale;
        this.sliceX = 0;
        this.sliceY = 0;
        this._box = new BoxCollision(_chtr.gapx, _chtr.gapy, this.scale, this.width, this.height);
        this.initState();
    }
    draw(posx, posy, direct) {
        if (direct === "right")
            return this.flipImage(posx, posy);
        this.ctx.drawImage(this._chtr.img, this.sliceX, this.sliceY, this._chtr.sliceW, this._chtr.sliceH, posx, posy, this.width, this.height);
    }
    flipImage(posx, posy) {
        this.ctx.translate(posx + this.width, posy);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this._chtr.img, this.sliceX, this.sliceY, this._chtr.sliceW, this._chtr.sliceH, 0, 0, this.width, this.height);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    initState() {
        this.state = "standing";
        this.configFrame = this.findConfigFrame();
        this.changeSliceY();
        this.countFrames = 0;
        this.currframeX = 1;
    }
    setState(state) {
        if (this.state === state)
            return;
        this.state = state;
        let config = this.findConfigFrame();
        if (!config)
            return this.initState();
        this.configFrame = config;
        this.changeSliceY();
        this.countFrames = 0;
        this.currframeX = 1;
    }
    changeSliceY() {
        this.sliceY = this._chtr.sliceH * this.configFrame.posy;
    }
    findConfigFrame() {
        return this._chtr.frames.get(this.state);
    }
    updateFrame() {
        this.countFrames += 1;
        if (this.currframeX === this.configFrame.max)
            this.currframeX = 1;
        if (this.countFrames > this.configFrame.delay) {
            this.sliceX = this._chtr.sliceW * this.currframeX;
            this.countFrames = 0;
            this.currframeX += 1;
        }
    }
    update(posx, posy, lookDirec) {
        this.updateFrame();
        this.draw(posx, posy, lookDirec);
    }
    get gap() {
        return { x: this._chtr.gapx, y: this._chtr.gapy };
    }
    getBoxCollision() {
        return this._box;
    }
}
