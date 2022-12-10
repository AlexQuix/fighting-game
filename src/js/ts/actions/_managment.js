import { Process } from "./_process.js";
import { isControlledAction } from "../utils/index.js";
export class ManagmentAction {
    constructor(info, actionClasses) {
        this.controlled = new Map();
        this.noControlled = new Map();
        actionClasses.forEach((_class) => {
            let action = new _class(info);
            if (isControlledAction(action))
                return this.controlled.set(_class.actionType, action);
            this.noControlled.set(_class.actionType, action);
        });
        this.setAction();
    }
    update() {
        this.controlled.forEach((action) => {
            Process.processAction(action);
        });
        this.noControlled.forEach((action) => {
            Process.processAction(action);
        });
    }
    toObject() {
        return Object.fromEntries([...this.controlled, ...this.noControlled]);
    }
    setAction() {
        this.controlled.forEach(action => {
            action.playerAction = this.toObject();
        });
        this.noControlled.forEach(action => {
            action.playerAction = this.toObject();
        });
    }
    static isContrAction(arg) {
        return arg.key;
    }
}
