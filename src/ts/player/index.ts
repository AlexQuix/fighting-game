export class Player implements IPlayer{
    constructor(
        public info: IPlayerInfo,
        public action: IPlayerAction,
        public characher: ICharacter
    ){
    }
    update(): void {
        this.info.update();
        this.action.update();
    }
    changeControlKeys(actions:{name:string, key:string}[]){
        let self = this;
        actions.forEach(({name, key})=>{
            let action = self.action.controlled.get(name);
            if(action){
                action.key = key;
            }
        })
    }
}

