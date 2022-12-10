import { Sprite } from "../sprite.js";
import { Velocity, Damage } from "../utils/index.js";
export class PlayerInfo {
    constructor(pos, _character, lookDirection = "left") {
        this._character = _character;
        this.lookDirection = lookDirection;
        this._damage = new Damage();
        this.health = 200;
        this.enemy = {};
        this.vel = new Velocity(0, 0);
        this.pos = { x: 0, y: 0 };
        this.name = "Anonimus";
        this.pos = pos;
        this._sprite = new Sprite(_character);
    }
    update() {
        this._sprite.update(this.pos.x, this.pos.y, this.lookDirection);
        let box = this._sprite.getBoxCollision();
        this._damage.update(this.pos.x + box.posx, this.pos.y + box.posy, box.width, this.lookDirection);
    }
    hasHealth() {
        return this.health > 0;
    }
    reduceHealth(damage) {
        if (!this.hasHealth())
            return;
        this.health -= damage;
    }
    drawDamage() {
        this._damage.draw();
    }
    collisionDamage(posx, posy, enemyWidth) {
        return this._damage.collision(posx, posy, enemyWidth);
    }
    get amountDamage() {
        return this._damage.damage;
    }
    set amountDamage(value) {
        this._damage.damage = value;
    }
    get directionDamage() {
        return this._damage.direction;
    }
    set directionDamage(value) {
        this._damage.direction = value;
    }
    get colorDamage() {
        return this._damage.fillColor;
    }
    set colorDamage(value) {
        this._damage.fillColor = value;
    }
    get widthDamage() {
        return this._damage.width;
    }
    get heightDamage() {
        return this._damage.height;
    }
}
