export class BaseAction {
    constructor(playerInfo) {
        this.playerInfo = playerInfo;
        this.active = false;
        this.automatic = false;
        this.playerAction = {};
        this.eventExists = false;
        this.disableOnstart = false;
        this.disableOnend = false;
        this.disableCollision = false;
    }
    addEvent() {
        this.eventExists = true;
    }
    removeEvent() {
        this.eventExists = false;
    }
}
