interface IPosition{
    x: number;
    y: number;
}
interface IVelocity{
    public x: number;
    public y: number;
    increaseX(value:number):void;
    decreaseX(value:number):void;
    resetX():void;
    setX(value:number):void;
    increaseY(value:number):void;
    decreaseY(value:number):void;
    resetY():void;
    setY(value:number):void;
}
