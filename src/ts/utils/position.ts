export class Position{
    private x:number = 0;
    private y:number = 0;

    get PosY(){
        return this.y;
    }
    get PosX(){
        return this.x;
    }
    set PosY(value:number){
        if(value < 0) value = 0;
        this.y = value;
    }
    set PosX(value:number){
        if(value < 0) value = 0;
        this.x = value;
    }
}