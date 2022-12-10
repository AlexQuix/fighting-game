export class BaseAction implements IBaseAction{
    public active: boolean = false;
    public automatic: boolean = false;
    public playerAction: IObjectAction = {} as IObjectAction;
    public eventExists: boolean = false;

    public disableOnstart:boolean = false;
    public disableOnend:boolean = false;
    public disableCollision:boolean = false;
    constructor(
        public playerInfo: IPlayerInfo
    ){}
    addEvent(): void {
        this.eventExists = true;
    }
    removeEvent(): void {
        this.eventExists = false;
    }
}