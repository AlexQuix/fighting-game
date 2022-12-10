export class Velocity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    increaseX(value) {
        this.x += value;
    }
    decreaseX(value) {
        this.x -= value;
    }
    resetX() {
        this.x = 0;
    }
    setX(value) {
        this.x = value;
    }
    increaseY(value) {
        this.y += value;
    }
    decreaseY(value) {
        this.y -= value;
    }
    resetY() {
        this.y = 0;
    }
    setY(value) {
        this.y = value;
    }
}
