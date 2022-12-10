type IActionType = "right" | "left" | "jump" | "fall" | "attack";

interface IHandleEvent{
    spriteState:string;
    disableOnstart:boolean;
    disableOnend:boolean;
    disableCollision:boolean;

    onstart():void;
    onanimate():void;
    onend():void;
    oncollision?: ()=>void;
}

interface IActionInfo{
    active: boolean;
    automatic: boolean;
    playerInfo: IPlayerInfo;
    playerAction: IObjectAction;
}
interface IControlkey{
    key: string;
    setKey(key:string):void;
}
interface IEventAction{
    eventExists:boolean;
    addEvent():void;
    removeEvent():void;
}

type IBaseAction = IActionInfo & IEventAction;
type IControlledAction = IBaseAction & ICollision & IControlkey & IHandleEvent;
type INonControlledAction = IBaseAction & ICollision & IHandleEvent;

interface IJumpAction extends IControlledAction{
    existFallEvent():boolean;
}

type IClassAction = {
    new(info:IPlayerInfo):IControlledAction | INonControlledAction;
    actionType:string;
    prototype:any;
}
interface IPlayerAction{
    controlled: Map<string, IControlledAction>
    noControlled: Map<string, INonControlledAction>
    update():void;
}