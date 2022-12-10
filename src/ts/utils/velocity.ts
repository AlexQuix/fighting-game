export class Velocity implements IVelocity{
    constructor(
        public x: number,
        public y: number
    ){
    }
    increaseX(value: number): void {
        this.x += value;
    }
    decreaseX(value: number): void {
        this.x -= value;
    }
    resetX(): void {
        this.x = 0;
    }
    setX(value: number): void {
        this.x = value;
    }
    increaseY(value: number): void {
        this.y += value;
    }
    decreaseY(value: number): void {
        this.y -= value;
    }
    resetY(): void {
        this.y = 0;
    }
    setY(value: number): void {
        this.y = value;
    }
}
