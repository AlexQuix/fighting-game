import { GAME_CONTEXT } from "./index.js";
export class Damage {
    constructor() {
        this.fillColor = "red";
        this.width = 100;
        this.height = 100;
        this.ctx = GAME_CONTEXT;
        this.damage = 10;
        this.areaX = { start: 0, end: 0 };
        this.areaY = { top: 0, bottom: 0 };
        this.direction = "right";
    }
    draw() {
        this.ctx.fillStyle = this.fillColor;
        this.ctx.fillRect(this.areaX.start, this.areaY.top, this.width, this.height);
    }
    setAreaX(posx, spriteWidth) {
        if (this.direction === "right") {
            this.areaX.start = posx + spriteWidth;
            this.areaX.end = this.areaX.start + this.width;
            return;
        }
        this.areaX.end = posx;
        this.areaX.start = posx - this.width;
    }
    setAreaY(posy) {
        this.areaY.top = posy - 5;
        this.areaY.bottom = this.areaY.top + this.height;
    }
    update(posx, posy, spriteWidth, direction) {
        this.direction = direction;
        this.setAreaX(posx, spriteWidth);
        this.setAreaY(posy);
    }
    collision(posx, posy, enemyWidth) {
        if (this.direction === "left")
            posx = posx + enemyWidth;
        return this.collisionX(posx) && this.collisionY(posy);
    }
    collisionX(posx) {
        let { start, end } = this.areaX;
        return start <= posx && end >= posx;
    }
    collisionY(posy) {
        let { top, bottom } = this.areaY;
        return top <= posy && bottom >= posy;
    }
}
