interface IPlayerInfo extends IHealth, IDamage{
    public name:string;
    public enemy:IEnemy;
    public vel:IVelocity;
    public pos:IPosition;
    public lookDirection: "right" | "left";
    public _sprite:ISprite;
    update():void;
}

interface IObjectAction{
    public jump:IJumpAction;
    public fall:IFallAction;
    public attack:IAttackAction;
    public right:IMoveRightAction;
    public left:IMoveLeftAction;
}
interface IEnemy extends IPlayerInfo{
}

interface IPlayer{
    action:IPlayerAction;
    info:IPlayerInfo;
    update():void;
}