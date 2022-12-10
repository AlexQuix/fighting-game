import {GAME_CONTEXT} from "./index.js";

export class Damage{
    public fillColor: string = "red";
    public width: number = 100;
    public height: number = 100;
    public ctx = GAME_CONTEXT;
    public damage = 10;

    public areaX:{start:number, end:number} = {start:0, end:0};
    public areaY:{top:number, bottom:number} = {top:0, bottom:0};
    public direction:"right"|"left" = "right";


    draw(){
        this.ctx.fillStyle = this.fillColor;
        this.ctx.fillRect(this.areaX.start, this.areaY.top, this.width, this.height);
    }
    setAreaX(posx:number, spriteWidth:number){
        if(this.direction === "right"){
            this.areaX.start = posx + spriteWidth;
            this.areaX.end = this.areaX.start + this.width;
            return;
        }
        this.areaX.end = posx;
        this.areaX.start = posx - this.width;
    }
    setAreaY(posy:number){
        this.areaY.top = posy - 5;
        this.areaY.bottom = this.areaY.top + this.height; 
    }
    update(posx:number, posy:number, spriteWidth:number, direction:"right"|"left"){
        this.direction = direction;
        this.setAreaX(posx, spriteWidth);
        this.setAreaY(posy);
    }
    collision(posx:number, posy:number, enemyWidth:number):boolean{
        if(this.direction === "left") posx = posx + enemyWidth;
        return this.collisionX(posx) && this.collisionY(posy);
    }
    collisionX(posx:number):boolean{
        let {start, end} = this.areaX;
        return start <= posx && end >= posx;
    }
    collisionY(posy:number):boolean{
        let {top, bottom} = this.areaY;
        return top <= posy && bottom >= posy;
    }
}