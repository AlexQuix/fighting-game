export class Position {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    get PosY() {
        return this.y;
    }
    get PosX() {
        return this.x;
    }
    set PosY(value) {
        if (value < 0)
            value = 0;
        this.y = value;
    }
    set PosX(value) {
        if (value < 0)
            value = 0;
        this.x = value;
    }
}
