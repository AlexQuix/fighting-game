export function handleKeyPress({ key }) {
    this.forEach(player => {
        let isAction = false;
        player.action.controlled.forEach((action) => {
            if (key === action.key) {
                action.active = true;
                isAction = true;
            }
        });
    });
}
export function handleKeyUp({ key }) {
    this.forEach(player => {
        player.action.controlled.forEach((action) => {
            if (key === action.key) {
                action.active = false;
            }
        });
    });
}
