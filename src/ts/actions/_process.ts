type IProcessAction = IControlledAction | INonControlledAction;
export class Process{
    static processAction(action:IProcessAction):void{
        if(action.active){
            if(!action.eventExists) return Process.activeAction(action);
            return Process.updateAction(action);
        }
        if(action.eventExists && action.automatic){
            return Process.updateAction(action);
        }
        if(action.eventExists){
            Process.disableAction(action);
        }
    }
    private static processCollision(action:IProcessAction){
        action.oncollision?.();
        action.onend();
        action.removeEvent();
    }
    private static updateAction(action:IProcessAction){
        if(action.hasCollided()) 
            return Process.processCollision(action);
        action.onanimate();
    }
    private static disableAction(action:IProcessAction){
        action.removeEvent();
        action.onend();
    }
    private static activeAction(action:IProcessAction){
        action.addEvent();
        action.onstart();
    }
}