export function handleKeyPress(
    this:IPlayer[],
    {key}:{key:string}
){
    this.forEach(player=>{
        let isAction = false;
        player.action.controlled.forEach((action)=>{
            if(key === action.key){
                action.active = true;
                isAction = true;
            }
        })
    })
}

export function handleKeyUp(
    this:IPlayer[],
    {key}:{key:string}
){
    this.forEach(player=>{
        player.action.controlled.forEach((action)=>{
            if(key === action.key){
                action.active = false;
            }
        })
    })
}