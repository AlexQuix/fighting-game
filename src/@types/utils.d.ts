interface ICollision{
    public hasCollided():boolean;
}
interface IDamage{
    get colorDamage():string;
    set colorDamage(value:string):void;
    get widthDamage():number;
    get heightDamage():number;
    get amountDamage():number;
    set amountDamage(value:number):void;
    
    get directionDamage():"right"|"left";
    set directionDamage(value:"right"|"left"):void;

    drawDamage():void;
    collisionDamage(posx:number, posy:number, enemyWidth:number):boolean;
}
interface IHealth{
    health:number;
    hasHealth():boolean;
    reduceHealth(damage:number):void;
}