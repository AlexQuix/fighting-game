interface IBoxCollision{
    width:number;
    height:number;
    posx:number;
    posy:number;
}
interface IStateSkill{
    initState():void;
    setState(state:string):void;
}
interface ISprite extends IStateSkill{
    public width:number;
    public height:number;
    update(posx:number, posy:number, lookDirec:"right"|"left"):void;
    getBoxCollision():IBoxCollision;
    get gap():{x:number,y:number};
}