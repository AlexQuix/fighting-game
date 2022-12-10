export class Process {
    static processAction(action) {
        if (action.active) {
            if (!action.eventExists)
                return Process.activeAction(action);
            return Process.updateAction(action);
        }
        if (action.eventExists && action.automatic) {
            return Process.updateAction(action);
        }
        if (action.eventExists) {
            Process.disableAction(action);
        }
    }
    static processCollision(action) {
        var _a;
        (_a = action.oncollision) === null || _a === void 0 ? void 0 : _a.call(action);
        action.onend();
        action.removeEvent();
    }
    static updateAction(action) {
        if (action.hasCollided())
            return Process.processCollision(action);
        action.onanimate();
    }
    static disableAction(action) {
        action.removeEvent();
        action.onend();
    }
    static activeAction(action) {
        action.addEvent();
        action.onstart();
    }
}
