import { AttackAction, MoveLeftAction, MoveRightAction, FallAction } from "../actions/_actions.js";
export class Demon {
    constructor() {
        this.imgUrl = "/sprites/character/demon.png";
        this.state = "standing";
        this.name = "Demon";
        this.skills = [AttackAction, MoveLeftAction, MoveRightAction, FallAction];
        this.sliceW = 288;
        this.sliceH = 160;
        this.gapx = 120;
        this.gapy = 80;
        this.frames = new Map();
        this.damageW = 200;
        this.damageH = "all";
        this.img = new Image();
        this.img.src = this.imgUrl;
        this.frames.set("standing", { delay: 5, posy: 0, max: 6 });
        this.frames.set("move", { delay: 3, posy: 1, max: 12 });
        this.frames.set("attack", { delay: 5, posy: 2, max: 15 });
        this.frames.set("injured", { delay: 5, posy: 3, max: 5 });
        this.frames.set("death", { delay: 3, posy: 4, max: 22 });
    }
}
