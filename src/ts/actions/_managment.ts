import {Process} from "./_process.js";
import {isControlledAction} from "../utils/index.js"

export class ManagmentAction{
    public controlled = new Map<string, IControlledAction>();
    public noControlled = new Map<string, INonControlledAction>();
    constructor(info:IPlayerInfo, actionClasses:IClassAction[]){
        actionClasses.forEach((_class)=>{
            let action = new _class(info);
            if(isControlledAction(action))
                return this.controlled.set(_class.actionType, action);
            this.noControlled.set(_class.actionType, action as any);
        })
        this.setAction();
    }
    update(){
        this.controlled.forEach((action)=>{
            Process.processAction(action);
        })
        this.noControlled.forEach((action)=>{
            Process.processAction(action);
        })
    }

    toObject(){
        return Object.fromEntries([...this.controlled, ...this.noControlled]);
    }
    setAction(){
        this.controlled.forEach(action=>{
            action.playerAction = this.toObject() as any;
        })
        this.noControlled.forEach(action=>{
            action.playerAction = this.toObject() as any;
        })
    }
    static isContrAction(arg:any):arg is IControlledAction{
        return arg.key;
    }
}