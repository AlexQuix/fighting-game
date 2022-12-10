export class Player {
    constructor(info, action, characher) {
        this.info = info;
        this.action = action;
        this.characher = characher;
    }
    update() {
        this.info.update();
        this.action.update();
    }
    changeControlKeys(actions) {
        let self = this;
        actions.forEach(({ name, key }) => {
            let action = self.action.controlled.get(name);
            if (action) {
                action.key = key;
            }
        });
    }
}
